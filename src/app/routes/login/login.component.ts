import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/auth/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class RouteLoginComponent {
  public mErro = '';
  public loading = false;

  public loginForm = new FormGroup({
    doc: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  async submitLoginForm() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.mErro = '';
      this.postLoginForm();
    } else {
      this.toastr.error('Usuário ou senha inválidos', 'Não deu!');
    }
  }

  private postLoginForm() {
    this.accountService.postLogin(this.loginForm.value).subscribe(
      (res: any) => {
        this.loading = false;
        this.login(this.loginForm.value.doc, res.type + ' ' + res.token);
      },
      (err) => {
        this.toastr.error(err.statusText, 'Error: ' + err.status);
        this.loading = false;
      }
    );
  }

  public validaCampo(campo: any) {
    return (
      this.loginForm.get(campo)?.invalid && this.loginForm.get(campo)?.touched
    );
  }

  async login(doc: string, token: string) {
    try {
      const result = await this.accountService.login(doc, token);
      if (result === true) {
        this.router.navigate(['meus-negocios']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
