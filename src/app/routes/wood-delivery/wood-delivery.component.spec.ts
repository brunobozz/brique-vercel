import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteWoodDeliveryComponent } from './wood-delivery.component';

describe('WoodDeliveryComponent', () => {
  let component: RouteWoodDeliveryComponent;
  let fixture: ComponentFixture<RouteWoodDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteWoodDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteWoodDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
