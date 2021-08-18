import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFornecimentoComponent } from './fornecimento.component';

describe('FornecimentoComponent', () => {
  let component: RouteFornecimentoComponent;
  let fixture: ComponentFixture<RouteFornecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteFornecimentoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFornecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
