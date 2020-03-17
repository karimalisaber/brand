import { AngularFireDatabase} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

 private create (){
    return this.db.list('/shopping-carts/').push({
      dateCreated: new Date().getDate()
    });
  }

 async getCart(): Promise<Observable<ShoppingCart>> {
  let cartId = await this.getOrCreateCartId();

  return this.db.object('/shopping-carts/' + cartId).valueChanges().map((x:any) => new ShoppingCart(x.items) );
}


private async getOrCreateCartId(): Promise <string> {
  let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;

      let result = await this.create(); 
      localStorage.setItem('cartId', result.key);
      return result.key ;  
    
}

private getItem(cartId: string, productId: string){
 return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
}

removeFromCart(product, productKey) {
  this.updateItem(product, productKey, -1);
}


async addToCart(product , productKey){
  this.updateItem(product, productKey, 1);
}


private async updateItem ( product, productKey: string , change: number){
  let cartId = await this.getOrCreateCartId();
  let item$ = this.getItem(cartId, productKey);

  item$.valueChanges().take(1).subscribe((item:any) => {
       
      if (item) {
      let quantity = item.quantity + change ;
      item$.update ({
      quantity: quantity });
      if (quantity <= 0) item$.remove();
      }
    else item$.update ({
      //product: product ,
      title: product.title,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 1 })
  });
}

async clearCart(){
 let cartId =  await this.getOrCreateCartId();
 this.db.object('/shopping-carts/'+ cartId  + '/items').remove();
}
}