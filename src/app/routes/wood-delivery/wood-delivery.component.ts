import { Component } from '@angular/core';

@Component({
  selector: 'app-wood-delivery',
  templateUrl: './wood-delivery.component.html',
  styleUrls: ['./wood-delivery.component.scss'],
})
export class RouteWoodDeliveryComponent {
  constructor() {}

  deliveries = [
    {
      date: 'Jan/01',
      contract: 0,
      delivered: 0,
    },
    {
      date: 'Jan/01',
      contract: 0,
      delivered: 0,
    },
    {
      date: 'Jan/01',
      contract: 0,
      delivered: 0,
    },
    {
      date: 'Jan/01',
      contract: 0,
      delivered: 0,
    },
  ];
}
