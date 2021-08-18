import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  public select = false;
  @Input() itemSelected?: string;
  @Input() selectTitle?: string;
  @Input() selectText?: string;
  @Input() selectItems?: any[];

  contratoSelecionado: string;

  constructor() {}

  public showSelect() {
    this.select = !this.select;
  }

  public itemChange(value: string) {
    this.itemSelected = value;
    this.select = !this.select;
  }
}
