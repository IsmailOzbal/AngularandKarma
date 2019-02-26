import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbmenuComponent } from './breadcrumbmenu.component';

describe('BreadcrumbmenuComponent', () => {
  let component: BreadcrumbmenuComponent;
  let fixture: ComponentFixture<BreadcrumbmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbmenuComponent ]
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
