import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-breadcrumbmenu',
  templateUrl: './breadcrumbmenu.component.html',
  styleUrls: ['./breadcrumbmenu.component.css']
})
export class BreadcrumbmenuComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;
  constructor() {}

  ngOnInit() {

    this.items = [
      { label: 'Product Interface 1(Material)',
      url: 'http://localhost:4200/product' },
      { label: 'Product Interface 2(Primeng)',
      url: 'http://localhost:4200/carouseldisplay'
    },
      {
        label: 'Samsung',
        url: 'https://www.samsung.com/uk/'
      }
    ];

    this.home = {icon: 'pi pi-home'};
  }
}
