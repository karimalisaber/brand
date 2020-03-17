import { OrderService } from 'src/app/order.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
orders$;
  constructor(private orderservice: OrderService) { 
   this.orders$ = orderservice.getOrders();
  }
}

