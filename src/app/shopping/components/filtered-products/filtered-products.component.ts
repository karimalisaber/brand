import { CategoryService } from '../../../shared/service/category.service';
import { Component,  Input } from '@angular/core';

@Component({
  selector: 'filtered-products',
  templateUrl: './filtered-products.component.html',
  styleUrls: ['./filtered-products.component.css']
})
export class FilteredProductsComponent {

  @Input('category') category;

  categories$;
  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAllValues() ; // values not snapshot
  }
}