import { Component, OnInit } from '@angular/core';
import { ProductView } from '../shared/Model/ProductModelView';
import { ProductService } from '../service/product.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-carouseldisplay',
  templateUrl: './carouseldisplay.component.html',
  styleUrls: ['./carouseldisplay.component.css']
})
export class CarouseldisplayComponent implements OnInit {

  products: ProductView[];

  constructor(private productService: ProductService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getProductList();
  }

  getProductList() {
    this.productService
      .getAllProductList()
      .toPromise()
      .then(res => {
        this.products = res;
        this.spinner.hide();
      });
  }

}
