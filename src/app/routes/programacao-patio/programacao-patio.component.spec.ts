import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacaoPatioComponent } from './programacao-patio.component';

describe('ProgramacaoPatioComponent', () => {
  let component: ProgramacaoPatioComponent;
  let fixture: ComponentFixture<ProgramacaoPatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramacaoPatioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacaoPatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
