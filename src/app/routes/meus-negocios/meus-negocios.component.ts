import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api/api.service';
import { slider } from './../../animations';

@Component({
  selector: 'app-meus-negocios',
  templateUrl: './meus-negocios.component.html',
  styleUrls: ['./meus-negocios.component.scss'],
  animations: [slider],
})
export class MeusNegociosComponent implements OnInit {
  public loading = false;
  public dadosNegociosString = window.localStorage.getItem('dadosNegocios');
  public dadosNegocios: any = [];
  public menuRoutes: any = [];

  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.verificaInfo();
  }

  private verificaInfo() {
    if (this.dadosNegociosString) {
      this.dadosNegocios = JSON.parse(this.dadosNegociosString);
      this.convertRoute();
    } else {
      this.getNegocios();
    }
  }

  private convertRoute() {
    let i = 0;
    this.dadosNegocios.forEach(() => {
      this.menuRoutes.push(
        this.dadosNegocios[i].identificacao.toLowerCase().replace(/\s/g, '-')
      );
      i++;
    });
  }

  private getNegocios() {
    this.loading = true;
    this.apiService.getDados('users/codigo-fornecedor').subscribe(
      (res: any) => {
        this.dadosNegocios = res;
        this.loading = false;
        this.convertRoute();
        window.localStorage.setItem('dadosNegocios', JSON.stringify(res));
      },
      (err) => {
        this.toastr.error(err.statusText, 'Error: ' + err.status);
        this.loading = false;
      }
    );
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
