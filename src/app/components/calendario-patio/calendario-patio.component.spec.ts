import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioPatioComponent } from './calendario-patio.component';

describe('CalendarioPatioComponent', () => {
  let component: CalendarioPatioComponent;
  let fixture: ComponentFixture<CalendarioPatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioPatioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioPatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
