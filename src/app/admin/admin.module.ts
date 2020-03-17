import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './component/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './component/components/admin-orders/admin-orders.component';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './component/components/product-form/product-form.component';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  providers: [
    AdminAuthGuardService
  ]
})

export class AdminModule {}