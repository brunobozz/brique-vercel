import { Component } from '@angular/core';

@Component({
  selector: 'app-previsao-tempo',
  templateUrl: './previsao-tempo.component.html',
  styleUrls: ['./previsao-tempo.component.scss'],
})
export class PrevisaoTempoComponent {
  public locais = [
    {
      cidade: 'Ortigueira',
      estado: 'PR',
      link: 'https://www.yr.no/en/forecast/daily-table/2-3455777/Brazil/Paran%C3%A1/Ortigueira/Ortigueira',
    },
    {
      cidade: 'Telêmaco Borba',
      estado: 'PR',
      link: 'https://www.yr.no/en/forecast/daily-table/2-3446652/Brazil/Paran%C3%A1/Tel%C3%AAmaco%20Borba/Tel%C3%AAmaco%20Borba',
    },
    {
      cidade: 'Correia Pinto',
      estado: 'SC',
      link: 'https://www.yr.no/en/forecast/daily-table/2-3465409/Brazil/Santa%20Catarina/Correia%20Pinto/Correia%20Pinto',
    },
    {
      cidade: 'Otacílio Costa',
      estado: 'SC',
      link: 'https://www.yr.no/en/forecast/daily-table/2-3455750/Brazil/Santa%20Catarina/Otac%C3%ADlio%20Costa/Otac%C3%ADlio%20Costa',
    },
  ];
  constructor() {}
}
