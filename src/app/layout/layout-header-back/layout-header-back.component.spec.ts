import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderBackComponent } from './layout-header-back.component';

describe('LayoutHeaderBackComponent', () => {
  let component: LayoutHeaderBackComponent;
  let fixture: ComponentFixture<LayoutHeaderBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutHeaderBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHeaderBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
