import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouseldisplayComponent } from './carouseldisplay.component';

describe('CarouseldisplayComponent', () => {
  let component: CarouseldisplayComponent;
  let fixture: ComponentFixture<CarouseldisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouseldisplayComponent ]
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
