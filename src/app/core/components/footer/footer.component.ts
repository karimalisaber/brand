import { ProductService } from 'src/app/shared/service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
callSuccess;
  constructor(product: ProductService) { 
   product.getAllValues().subscribe(x => {
    this.callSuccess = x;
    console.log(this.callSuccess);
  })
  }

  ngOnInit() {
  }

}
