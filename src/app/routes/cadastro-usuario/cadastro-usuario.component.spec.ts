import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';

describe('CadastroUsuarioComponent', () => {
  let component: CadastroUsuarioComponent;
  let fixture: ComponentFixture<CadastroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        RouterTestingModule,
      ],
      declarations: [CadastroUsuarioComponent],
      providers: [ToastrService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
