import { CustomFormsModule } from 'ng2-validation';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from './component/product-cart/product-cart.component';
import { ProductQuantityComponent } from './component/product-quantity/product-quantity.component';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { UserService } from './service/user.service';
import { CategoryService } from './service/category.service';
import { ProductService } from './service/product.service';
import { ShoppingCartService } from './service/shopping-cart.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    ProductCartComponent,
    ProductQuantityComponent
   ],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService, 
    CategoryService,
    ProductService,
    ShoppingCartService
  ],
  exports :[
    CommonModule,
    ProductCartComponent,
    ProductQuantityComponent,
    FormsModule,
    CustomFormsModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ]
})
export class SharedModule {}