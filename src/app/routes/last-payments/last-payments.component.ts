import { Component } from '@angular/core';

@Component({
  selector: 'app-last-payments',
  templateUrl: './last-payments.component.html',
  styleUrls: ['./last-payments.component.scss'],
})
export class RouteLastPaymentsComponent {
  constructor() {}

  payments = [
    {
      date: '00/00',
      fortnight: 0,
      price: '0,00',
      tons: '0',
    },
    {
      date: '00/00',
      fortnight: 0,
      price: '0,00',
      tons: '0',
    },
    {
      date: '00/00',
      fortnight: 0,
      price: '0,00',
      tons: '0',
    },
    {
      date: '00/00',
      fortnight: 0,
      price: '0,00',
      tons: '0',
    },
  ];
}
