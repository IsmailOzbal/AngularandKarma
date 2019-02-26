import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouseldisplayComponent } from './carouseldisplay.component';

import {NO_ERRORS_SCHEMA} from '@angular/core';
import { ProductService } from '../service/product.service';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CarouseldisplayComponent', () => {
  let component: CarouseldisplayComponent;
  let fixture: ComponentFixture<CarouseldisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouseldisplayComponent ],
      schemas: [ NO_ERRORS_SCHEMA],
      imports : [ HttpClientTestingModule, ToastrModule.forRoot(), NgxSpinnerModule],
      providers : [ProductService ]
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
