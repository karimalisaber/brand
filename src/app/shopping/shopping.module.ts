import { CategoryService } from './../shared/service/category.service';
import { FilteredProductsComponent } from './components/filtered-products/filtered-products.component';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    OrderSuccessComponent,
    CheckOutComponent,
    MyOrdersComponent,
    ProductsComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    FilteredProductsComponent
  ],
  providers:[CategoryService],

  imports: [
    SharedModule,
    RouterModule
  ]
})
export class ShoppingModule {}