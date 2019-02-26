import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ProductView } from '../shared/Model/ProductModelView';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns = ['id', 'productName', 'modelCode', 'serialNumber'];
  dataSource: any;
  productList: ProductView[] = [];
  constructor(private productService: ProductService) {

   }

  ngOnInit() {

    this.getProductList();
  }


  getProductList() {
    this.productService
      .getAllProductList()
      .toPromise()
      .then(res => {
        this.productList = res;
        this.dataSource = new MatTableDataSource(this.productList);
      });
  }

}
