import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouseldisplayComponent } from './carouseldisplay.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('CarouseldisplayComponent', () => {
  let component: CarouseldisplayComponent;
  let fixture: ComponentFixture<CarouseldisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouseldisplayComponent ],
      schemas: [ NO_ERRORS_SCHEMA]
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
