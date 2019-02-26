import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Global } from '../shared/Constant/Global';
import { ProductView } from '../shared/Model/ProductModelView';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getAllProductList(): Observable<ProductView[]> {
    return this.http.get<ProductView[]>( Global.BaseUri + 'products').pipe(catchError(this.handleError('getAllProductList', [])));
  }

  private log(message: string) {
    this.toastr.error(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
