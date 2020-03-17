import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { ProductService } from 'src/app/shared/service/product.service';
import { ShoppingCartService } from 'src/app/shared/service/shopping-cart.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  products = [];

  cart$ : Observable<ShoppingCart> ;
  
  category: string ;
  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService ) {}

  async ngOnInit(){  
    this.cart$ = await this.shoppingCartService.getCart() ;      
    
    this.populateProducts();
  }

  private populateProducts(){
      // values not snapshot
      this.productService.getAllValues().subscribe( products => {
      this.products = products;
    }); 
  }
}