import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/components/common/menuitem";

@Component({
  selector: "app-menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.css"]
})
export class MenubarComponent implements OnInit {
  items1: MenuItem[];

  activeItem: MenuItem;

  constructor() {}

  ngOnInit() {
    this.items1 = [
      { label: "Stats", icon: "fa fa-fw fa-bar-chart" },
      { label: "Calendar", icon: "fa fa-fw fa-calendar" },
      { label: "Documentation", icon: "fa fa-fw fa-book" },
      { label: "Support", icon: "fa fa-fw fa-support" },
      { label: "Social", icon: "fa fa-fw fa-twitter" }
    ];
  }
}
