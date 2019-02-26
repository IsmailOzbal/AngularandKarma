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
      { label: 'Product' },
      { label: 'Model'},
      {
        label: 'Samsung',
        url: 'https://www.samsung.com/uk/'
      }
    ];

    this.home = {icon: 'pi pi-home'};
  }
}
