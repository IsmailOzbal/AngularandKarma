import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('ProductService', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule , ToastrModule.forRoot()],
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });
});
