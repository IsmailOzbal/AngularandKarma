import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/Model/Product';
import { ProductService } from '../service/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carouseldisplay',
  templateUrl: './carouseldisplay.component.html',
  styleUrls: ['./carouseldisplay.component.css']
})
export class CarouseldisplayComponent implements OnInit {
  products: Product[];
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
    this.toastr.info(productValue.productName);
  }
}
