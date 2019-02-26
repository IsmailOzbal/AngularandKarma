import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbmenuComponent } from './breadcrumbmenu.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('BreadcrumbmenuComponent', () => {
  let component: BreadcrumbmenuComponent;
  let fixture: ComponentFixture<BreadcrumbmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbmenuComponent ],
      schemas: [ NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
