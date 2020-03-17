import { ShoppingCartService } from '../../../shared/service/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit  {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  products = [];
  filteredProducts = [];
  
  cart$ : Observable<ShoppingCart> ;
  
  category: string ;
  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService , 
    private route: ActivatedRoute ) {}

async ngOnInit(){
  this.cart$ = await this.shoppingCartService.getCart() ;
      
  this.populateProducts();   
}

private populateProducts(){
     // values not snapshot
  this.productService.getAllValues()
  .switchMap(products => {
    this.products = products;
    return this.route.queryParamMap}) 
    .subscribe(params=>{
      this.category = params.get('category');
      
      this.apllyFilter();
    });
  }
  
  private apllyFilter(){
        this.filteredProducts = (this.category) ? //setting the filtered products array
        this.products.filter (p => p.payload.val().category === this.category) : 
        this.products;
   }
   }