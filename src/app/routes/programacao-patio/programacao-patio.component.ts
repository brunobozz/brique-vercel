import { Component } from '@angular/core';

@Component({
  selector: 'app-programacao-patio',
  templateUrl: './programacao-patio.component.html',
  styleUrls: ['./programacao-patio.component.scss'],
})
export class ProgramacaoPatioComponent {
  constructor() {}

  date: Date;

  locais = [
    {
      nome: 'Ortigueira - PR',
      conteudo: 'Conteudo da Ortigueira',
    },
    {
      nome: 'Telêmaco Borba - PR',
      conteudo: 'Conteudo da Telêmaco Borba',
    },
    {
      nome: 'Correia Pinto - SC',
      conteudo: 'Conteudo da Correia Pinto',
    },
    {
      nome: 'Otacílio Costa - SC',
      conteudo: 'Conteudo da Otacílio Costa',
    },
  ];
}
