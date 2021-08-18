import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFomentoComponent } from './fomento.component';

describe('RouteHomeComponent', () => {
  let component: RouteFomentoComponent;
  let fixture: ComponentFixture<RouteFomentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteFomentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFomentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
