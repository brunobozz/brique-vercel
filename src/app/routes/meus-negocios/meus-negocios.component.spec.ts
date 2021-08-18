import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { MeusNegociosComponent } from './meus-negocios.component';

describe('MeusNegociosComponent', () => {
  let component: MeusNegociosComponent;
  let fixture: ComponentFixture<MeusNegociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      declarations: [MeusNegociosComponent],
      providers: [ToastrService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
