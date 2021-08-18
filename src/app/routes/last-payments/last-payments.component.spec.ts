import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteLastPaymentsComponent } from './last-payments.component';

describe('LastPaymentsComponent', () => {
  let component: RouteLastPaymentsComponent;
  let fixture: ComponentFixture<RouteLastPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteLastPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteLastPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
