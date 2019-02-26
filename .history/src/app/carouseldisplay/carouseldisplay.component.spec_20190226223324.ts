import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouseldisplayComponent } from './carouseldisplay.component';

import {NO_ERRORS_SCHEMA} from '@angular/core';
import { ProductService } from '../service/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('CarouseldisplayComponent', () => {
  let component: CarouseldisplayComponent;
  let fixture: ComponentFixture<CarouseldisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouseldisplayComponent ],
      schemas: [ NO_ERRORS_SCHEMA],
      imports : [ HttpClientModule, HttpClient],
      providers : [ProductService, NgxSpinnerService , ToastrService  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouseldisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
