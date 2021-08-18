import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortileDisponibilityComponent } from './cortile-disponibility.component';

describe('CortileDisponibilityComponent', () => {
  let component: CortileDisponibilityComponent;
  let fixture: ComponentFixture<CortileDisponibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CortileDisponibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CortileDisponibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
