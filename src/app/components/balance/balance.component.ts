import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  @Input() month?: string;
  @Input() fortnight?: string;
  @Input() nextDate?: string;
  @Input() volumn: string;
  @Input() delivered: string;
  @Input() nextOrTotal: string;
  public value: number;
  public percent: number;

  constructor() {}

  ngOnInit(): void {
    // TESTE PARA O CÁLCULO DO WOOD PIE
    this.percent = 60;
    this.value = (50 * this.percent) / 100 + 50;
  }
}
