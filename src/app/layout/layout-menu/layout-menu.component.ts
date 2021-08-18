import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.scss'],
})
export class LayoutMenuComponent {
  public menuSelecionado = '';

  public menuItem: any[] = [
    {
      text: 'Canal Klabin',
      icone: 'fa-bullhorn',
      routerLink: 'canal-klabin',
    },
    {
      text: 'Meus Negócios',
      icone: 'fa-line-chart',
      routerLink: 'meus-negocios',
    },
    {
      text: 'Novos Negócios',
      icone: 'fa-handshake-o',
      routerLink: 'novos-negocios',
    },
    {
      text: 'Fale Conosco',
      icone: 'fa-whatsapp',
      routerLink: 'fale-conosco',
    },
  ];

  constructor(private location: Location, private router: Router) {
    this.router.events.subscribe((val) => {
      if (this.location.path() !== '') {
        this.menuSelecionado = location.path().substring(1);
      } else {
        this.menuSelecionado = 'canal-klabin';
      }
    });
  }
}
