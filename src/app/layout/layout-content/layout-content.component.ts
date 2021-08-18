import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './../../animations';

@Component({
  selector: 'app-layout-content',
  templateUrl: './layout-content.component.html',
  styleUrls: ['./layout-content.component.scss'],
  animations: [slider],
})
export class LayoutContentComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
