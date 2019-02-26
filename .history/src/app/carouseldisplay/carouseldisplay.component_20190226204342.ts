import { Component, OnInit } from '@angular/core';
import { ProductView } from '../shared/Model/ProductModelView';
import { ProductService } from '../service/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carouseldisplay',
  templateUrl: './carouseldisplay.component.html',
  styleUrls: ['./carouseldisplay.component.css']
})
export class CarouseldisplayComponent implements OnInit {
  products: ProductView[];
  productValue: any;

  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

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

  selectProduct(productValue: ProductView) {
    this.toastr.success(productValue.productName);
  }
}
