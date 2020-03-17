import { ContactsComponent } from './components/contacts/contacts.component';
import { SignupComponent } from './core/signup/signup.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { AuthGuardService } from './shared/service/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './core/components/login/login.component';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';

import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';

import { AdminProductsComponent } from './admin/component/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/component/components/admin-orders/admin-orders.component';
import { LogoutComponent } from './core/components/logout/logout.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ProductFormComponent } from './admin/component/components/product-form/product-form.component';
import { HomeComponent } from './core/components/home/home.component';


const routes: Routes = [

  {path: '' , component: HomeComponent} , 
  {path: 'login' , component: LoginComponent },
  {path: 'signup' , component: SignupComponent },
  {path: 'logout' , component: LogoutComponent} ,
  {path: 'contact' , component: ContactsComponent} ,
  {path: 'shopping-cart' , component: ShoppingCartComponent } ,
  {path: 'products' , component: ProductsComponent},

  {path: 'check-out' , component: CheckOutComponent , canActivate: [AuthGuardService]} ,

  {path: 'order-success/:id' , component: OrderSuccessComponent, canActivate: [AuthGuardService]} ,
  
  {path: 'my-orders' ,  component: MyOrdersComponent, canActivate: [AuthGuardService] },

  {path: 'admin/products/new' , component: ProductFormComponent, canActivate: [AuthGuardService , AdminAuthGuardService]  },

  {path: 'admin/products/:id' , component: ProductFormComponent, canActivate: [AuthGuardService , AdminAuthGuardService]  },

  {path: 'admin/products' , component: AdminProductsComponent, canActivate: [AuthGuardService , AdminAuthGuardService]  },

  {path: 'admin/orders' , component: AdminOrdersComponent, canActivate: [AuthGuardService , AdminAuthGuardService] } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }