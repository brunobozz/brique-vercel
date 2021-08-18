import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-layout-header-back',
  templateUrl: './layout-header-back.component.html',
  styleUrls: ['./layout-header-back.component.scss'],
})
export class LayoutHeaderBackComponent {
  constructor(private location: Location) {}

  public backRoute() {
    this.location.back();
  }
}
