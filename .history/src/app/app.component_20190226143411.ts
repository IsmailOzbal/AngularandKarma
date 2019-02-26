import { Component } from '@angular/core';
import { ProductView } from './shared/Model/ProductModelView';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList: ProductView[] = [];
  constructor(private productService: ProductService) {
    this.getProductList();
   }
  getProductList() {
    this.productService
      .getAllProductList()
      .toPromise()
      .then(res => {
        this.productList = res;
      });
  }
}
