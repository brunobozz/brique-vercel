import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteContractComponent } from './contract.component';

describe('ContractComponent', () => {
  let component: RouteContractComponent;
  let fixture: ComponentFixture<RouteContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteContractComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
