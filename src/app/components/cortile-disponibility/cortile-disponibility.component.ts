import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cortile-disponibility',
  templateUrl: './cortile-disponibility.component.html',
  styleUrls: ['./cortile-disponibility.component.scss'],
})
export class CortileDisponibilityComponent {
  @Input() url: string;
  constructor() {}
}
