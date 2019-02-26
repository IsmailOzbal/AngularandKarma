import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {
      path: 'product',
      component: ProductComponent,
      data: { title: 'Product List' }
    },
  { path: '',
  redirectTo: '/product',
  pathMatch: 'full'
}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
