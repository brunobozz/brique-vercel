import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalKlabinComponent } from './canal-klabin.component';

describe('CanalKlabinComponent', () => {
  let component: CanalKlabinComponent;
  let fixture: ComponentFixture<CanalKlabinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanalKlabinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanalKlabinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
