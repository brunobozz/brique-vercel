import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuComponent implements OnInit {
  @Input() negocios: any;
  @Input() loading: any;
  @Input() menuRoutes: any;
  public activeMenu: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activeMenu = this.location.path();
  }

  goRoute(value: string) {
    this.activeMenu = value;
    this.router.navigate([value], { relativeTo: this.route });
  }
}
