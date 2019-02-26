import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-breadcrumbmenu',
  templateUrl: './breadcrumbmenu.component.html',
  styleUrls: ['./breadcrumbmenu.component.css']
})
export class BreadcrumbmenuComponent implements OnInit {
  private items: MenuItem[];

  constructor() {}

  ngOnInit() {

    this.items = [
      { label: 'Categories' },
      { label: 'Sports' },
      { label: 'Football' },
      { label: 'Countries' },
      { label: 'Spain' },
      { label: 'F.C. Barcelona' },
      { label: 'Squad' },
      {
        label: 'Lionel Messi',
        url: 'https://en.wikipedia.org/wiki/Lionel_Messi'
      }
    ];
  }
}
