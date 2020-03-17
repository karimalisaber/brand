import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements  OnDestroy {
  
  subscription: Subscription ; 

  products;
  filteredproducts: any[] ; 
  constructor( private productservice: ProductService) {
    this.subscription = this.productservice.getAllValues().subscribe( products => this.filteredproducts = this.products = products) ;
   }

   filter(query: string) {
    this.filteredproducts = (query) ?
     this.products.filter(p => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) : this.products ; 
   }


   ngOnDestroy(){
     this.subscription.unsubscribe() ; 
   }
}