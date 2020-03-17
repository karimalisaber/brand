import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../../shared/service/category.service';
import { Component } from '@angular/core';
import 'rxjs/add/operator/take' ; 
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent {
  categories$;
  product: any ={}; 
  id;
  constructor( 
    categoryservice : CategoryService ,
    private productservice: ProductService,
     private router: Router ,
     private route: ActivatedRoute ) 
      {
      this.categories$ = categoryservice.getAllValues() ;
      
       this.id = this.route.snapshot.paramMap.get('id');

      if (this.id) 
      {
      this.productservice.getOneProduct(this.id).take(1).subscribe( p => this.product = p );
      }
   }   
   save(product){
     if(this.id) {
       this.productservice.update(this.id, product);
     }
     else this.productservice.create(product);
     this.router.navigate(['/admin/products']);
   }

   delete() {
     if (confirm('are you sure you want to delete this product?')) {
       this.productservice.delete(this.id) ; 
       this.router.navigate(['/admin/products']) ;
     }
   }
}