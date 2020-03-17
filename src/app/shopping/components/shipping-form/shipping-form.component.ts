import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/order.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit , OnDestroy { 
  @Input('cart') cart: ShoppingCart;
  shipping: any = {};
  userId: string;
  userSubscription: Subscription;
  constructor(
    private router: Router,
    private authservice: AuthService,
    private orderService: OrderService
  ){}

  ngOnInit() {
    this.userSubscription = this.authservice.user$
    .subscribe( user => this.userId = user.uid );
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
  
  async placeOrder() {
    let order = new Order( this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  } 
}