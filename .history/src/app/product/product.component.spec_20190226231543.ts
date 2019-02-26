import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

import {NO_ERRORS_SCHEMA} from '@angular/core';

import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from '../service/product.service';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      // tslint:disable-next-line:max-line-length
      imports : [ MatTableModule, BrowserAnimationsModule , MatPaginatorModule, HttpClientTestingModule, ToastrModule.forRoot(), NgxSpinnerModule],
      providers : [ ProductService ],
      schemas: [ NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

    component.productList = [
      { id: 1, modelCode : 'SM-S8ABCD13', productName : 'Galaxy S3', serialNumber : 'SN00000001'    },
      { id: 2, modelCode : 'SM-S8ABCD14', productName : 'Galaxy S4', serialNumber : 'SN00000002'    },
    ];


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




});
