import { TestBed, getTestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { Global } from '../shared/Constant/Global';

describe('ProductService', () => {
  let injector: TestBed;
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule , ToastrModule.forRoot()],
      providers: [ProductService]
    })
    .compileComponents();
    injector = getTestBed();
    service = injector.get(ProductService);
    httpMock = injector.get(HttpTestingController);
  }));


  describe('#getProducts', () => {
    it('should return an Observable<Product[]>', () => {
      const dummyProducts = [
        { id: 1, modelCode : 'SM-S8ABCD13', productName : 'Galaxy S3', serialNumber : 'SN00000001'    },
        { id: 2, modelCode : 'SM-S8ABCD14', productName : 'Galaxy S4', serialNumber : 'SN00000002'    },
      ];

      service.getAllProductList().subscribe(products => {
        expect(products.length).toBe(1);
        expect(products).toEqual(dummyProducts);
      });

      const req = httpMock.expectOne(`${Global.BaseUri}products`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyProducts);
    });
  });

  it('should be created', () => {
    const productservice: ProductService = TestBed.get(ProductService);
    expect(productservice).toBeTruthy();
  });
});
