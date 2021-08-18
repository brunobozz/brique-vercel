import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodDeliveryTableComponent } from './wood-delivery-table.component';

describe('WoodDeliveryTableComponent', () => {
  let component: WoodDeliveryTableComponent;
  let fixture: ComponentFixture<WoodDeliveryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodDeliveryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodDeliveryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
