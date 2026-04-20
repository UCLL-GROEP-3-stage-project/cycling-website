import { Component, OnInit, inject } from '@angular/core';

import { RaceApiItem, RacesApi } from '../../services/races-api';

@Component({
  selector: 'app-api-data',
  imports: [],
  templateUrl: './api-data.html',
  styleUrl: './api-data.css'
})
export class ApiData implements OnInit {
  private readonly racesApi = inject(RacesApi);

  protected races: RaceApiItem[] = [];
  protected loading = true;
  protected errorMessage = '';

  public ngOnInit(): void {
    this.racesApi.getRaces().subscribe({
      next: (races) => {
        this.races = races.slice(0, 5);
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Kon de API-data niet laden.';
        this.loading = false;
      }
    });
  }
}
