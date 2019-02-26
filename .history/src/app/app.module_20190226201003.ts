import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatMenuItem
} from "@angular/material";
import { MatGridListModule } from "@angular/material/grid-list";
import { NgxSpinnerModule } from "ngx-spinner";
import { BreadcrumbmenuComponent } from "./breadcrumbmenu/breadcrumbmenu.component";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { MenuItem } from "primeng/api";
import { CarouseldisplayComponent } from "./carouseldisplay/carouseldisplay.component";
import { CarouselModule } from "primeng/carousel";

const appRoutes: Routes = [
  {
    path: "product",
    component: ProductComponent,
    data: { title: "Product" }
  },
  {
    path: "carouseldisplay",
    component: CarouseldisplayComponent,
    data: { title: "CarouseDisplay" }
  },

  { path: "", redirectTo: "/product", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BreadcrumbmenuComponent,
    CarouseldisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatGridListModule,
    CarouselModule,
    NgxSpinnerModule,
    MatIconModule,
    BreadcrumbModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
