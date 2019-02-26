import { Component, OnInit } from '@angular/core';
import { ProductView } from '../shared/Model/ProductModelView';

@Component({
  selector: 'app-carouseldisplay',
  templateUrl: './carouseldisplay.component.html',
  styleUrls: ['./carouseldisplay.component.css']
})
export class CarouseldisplayComponent implements OnInit {

  products: ProductView[];

  constructor() { }

  ngOnInit() {
  }

}
