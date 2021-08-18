import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovosNegociosComponent } from './novos-negocios.component';

describe('NovosNegociosComponent', () => {
  let component: NovosNegociosComponent;
  let fixture: ComponentFixture<NovosNegociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovosNegociosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovosNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
