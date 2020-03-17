import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../../service/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})

export class ProductQuantityComponent { 
@Input('product') product;
@Input('productKey') productKey;
@Input('shopping-cart') shoppingCart;

  constructor( private cartService: ShoppingCartService) {}

  addToCart(){
    this.cartService.addToCart (this.product , this.productKey);
  }
  removeFromCart(){
    this.cartService.removeFromCart(this.product , this.productKey)
  }
}