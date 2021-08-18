import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api/api.service';
import { AccountService } from 'src/app/services/auth/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class RouteProfileComponent implements OnInit {
  public loading = false;
  public loadingOrigem = false;
  readonly dadosString = window.localStorage.getItem('dados');
  readonly origensString = window.localStorage.getItem('origens');
  public dados: any = [];
  public origens: any = [];

  constructor(
    private router: Router,
    private accountService: AccountService,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.verificaInfo();
  }

  private verificaInfo() {
    if (this.dadosString) {
      this.dados = JSON.parse(this.dadosString);
      if (this.origensString) {
        this.origens = JSON.parse(this.origensString);
      } else {
        this.getOrigemApi();
      }
    } else {
      this.getDadosApi();
    }
  }

  private getDadosApi() {
    this.loading = true;
    this.apiService.getDadosUser('dados-fornecedores/').subscribe(
      (res: any) => {
        this.dados = res;
        this.loading = false;
        window.localStorage.setItem('dados', JSON.stringify(res));
        this.getOrigemApi();
      },
      (err) => {
        console.log(err);
        this.toastr.error(err.statusText, 'Error: ' + err.status);
        this.loading = false;
      }
    );
  }

  private getOrigemApi() {
    this.loadingOrigem = true;
    this.apiService.getDadosCod('origem/', '8000052370').subscribe(
      (res: any) => {
        this.origens = res;
        this.loadingOrigem = false;
        window.localStorage.setItem('origens', JSON.stringify(res));
      },
      (err) => {
        console.log(err);
        this.toastr.error(err.statusText, 'Error: ' + err.status);
        this.loadingOrigem = false;
      }
    );
  }

  async logout() {
    try {
      const result = await this.accountService.logout();
      if (result === true) {
        window.localStorage.clear();
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
