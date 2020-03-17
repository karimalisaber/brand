import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor( private db: AngularFireDatabase) { }

  create (product) {
    return this.db.list('/products').push(product);
  }

  getAllValues(){
    return this.db.list('/products').snapshotChanges();
  }

  getOneProduct (productId) {
    return this.db.object('/products/' + productId).valueChanges() ;
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product) ; 
  }
  
  delete(productId) {
     return this.db.object('/products/' + productId).remove();
  }
}