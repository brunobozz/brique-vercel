import { Component } from '@angular/core';

@Component({
  selector: 'app-route-fomento',
  templateUrl: './fomento.component.html',
  styleUrls: ['./fomento.component.scss'],
})
export class RouteFomentoComponent {
  constructor() {}

  activeMenu = 'meus-negocios/fomento';

  nextDate = '00/00/0000';
  volumn = '0,00';
  delivered = '0,00';
  nextOrTotal = '0';

  contratos = ['Contrato 1', 'Contrato 2', 'Contrato 3'];

  payments = [
    {
      date: '00/00',
      price: '0,00',
      tons: 0,
    },
    {
      date: '00/00',
      price: '0,00',
      tons: 0,
    },
    {
      date: '00/00',
      price: '0,00',
      tons: 0,
    },
  ];
}
