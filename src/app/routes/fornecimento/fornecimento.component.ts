import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-fornecimento',
  templateUrl: './fornecimento.component.html',
  styleUrls: ['./fornecimento.component.scss'],
})
export class RouteFornecimentoComponent implements OnInit {
  readonly origensString = window.localStorage.getItem('origens');
  readonly dadosString = window.localStorage.getItem('dados');
  readonly dadosNegociosString = window.localStorage.getItem('dadosNegocios');
  public dadosNegocios: any = [];
  public origens: any = [];
  private origemSelecionada: string = '';
  private talhao: any = [];

  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.verificaInfo();
    if (this.dadosNegociosString) {
      this.dadosNegocios = JSON.parse(this.dadosNegociosString);
      console.log(this.dadosNegocios);
    }
    this.getMovMadConsumo();
  }

  private verificaInfo() {
    if (this.origensString) {
      this.origens = JSON.parse(this.origensString);
      this.origemSelecionada = this.origens[0].objnr;
      console.log(this.origemSelecionada);
    } else {
      this.getOrigemApi();
    }
  }

  private getMovMadConsumo() {
    this.apiService
      .getDadosCod('mov-madeira-consumo/', '0000027145/detalhes')
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  private getOrigemApi() {
    this.apiService
      .getDadosCod('origem/', '8000052370')
      .subscribe((res: any) => {
        this.origens = res;
        window.localStorage.setItem('origens', JSON.stringify(res));
      });
  }

  private getTalhao(objnr: string) {
    this.apiService
      .getDadosCod('origem/talhao/', objnr)
      .subscribe((res: any) => {
        this.talhao = res;
        console.log(this.talhao);
      });
  }

  public trocaOrigem(value: any) {
    this.origemSelecionada = value;
    this.getTalhao(this.origemSelecionada);
  }

  month = 'Maio';
  volumn = '0,00';
  fortnight = '1';
  delivered = '0,00';
  nextOrTotal = '0';

  payments = [
    {
      date: '00/00',
      price: '0,00',
      tons: 0,
      fortnight: 1,
    },
    {
      date: '00/00',
      price: '0,00',
      tons: 0,
      fortnight: 1,
    },
    {
      date: '00/00',
      price: '0,00',
      tons: 0,
      fortnight: 1,
    },
  ];
}
