import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quick-link',
  templateUrl: './quick-link.component.html',
  styleUrls: ['./quick-link.component.scss'],
})
export class QuickLinkComponent {
  constructor() {}

  @Input() title: string;
  @Input() url: string;
  @Input() text: string;
}
