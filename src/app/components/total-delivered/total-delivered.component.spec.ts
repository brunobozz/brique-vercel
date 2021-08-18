import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDeliveredComponent } from './total-delivered.component';

describe('TotalDeliveredComponent', () => {
  let component: TotalDeliveredComponent;
  let fixture: ComponentFixture<TotalDeliveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDeliveredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
