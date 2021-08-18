import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent {
  public mErro = '';
  public loading = false;
  public pass1 = 'password';
  public pass2 = 'password';

  public cadastroForm = new FormGroup({
    cpfcnpj: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    passwordcheck: new FormControl(''),
    mail: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private api: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  public validaCampo(campo: any) {
    this.cadastroForm.controls.passwordcheck.setValidators([
      Validators.required,
      Validators.pattern(this.cadastroForm.value.password),
    ]);
    return (
      this.cadastroForm.get(campo)?.invalid &&
      this.cadastroForm.get(campo)?.touched
    );
  }

  async submitCadastroForm() {
    if (this.cadastroForm.valid) {
      this.loading = true;
      this.mErro = '';
      this.postCadastroForm();
    } else {
      this.toastr.error('Campos inválidos');
    }
  }

  private postCadastroForm() {
    const dados = {
      cpfcnpj: this.cadastroForm.value.cpfcnpj,
      password: this.cadastroForm.value.password,
      mail: this.cadastroForm.value.mail,
    };
    this.api.postItemNoHeaders('users', dados).subscribe(
      () => {
        this.toastr.success('Usuário cadastrado', 'Pronto!');
        this.loading = false;
        this.router.navigate(['login']);
      },
      (err) => {
        this.toastr.error(err.statusText, 'Error: ' + err.status);
        this.loading = false;
      }
    );
  }

  public showPass(input: string) {
    if (input === 'pass1') {
      if (this.pass1 === 'password') {
        this.pass1 = 'text';
      } else {
        this.pass1 = 'password';
      }
    } else {
      if (this.pass2 === 'password') {
        this.pass2 = 'text';
      } else {
        this.pass2 = 'password';
      }
    }
  }
}
