import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wood-delivery-table',
  templateUrl: './wood-delivery-table.component.html',
  styleUrls: ['./wood-delivery-table.component.scss'],
})
export class WoodDeliveryTableComponent {
  constructor() {}

  @Input() deliveries: any;
}
