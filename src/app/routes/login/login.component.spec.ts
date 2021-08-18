import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { RouteLoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: RouteLoginComponent;
  let fixture: ComponentFixture<RouteLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        RouterTestingModule,
      ],
      declarations: [RouteLoginComponent],
      providers: [ToastrService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
