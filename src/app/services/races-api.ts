import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface RaceApiItem {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class RacesApi {
  private readonly http = inject(HttpClient);

  public getRaces(): Observable<RaceApiItem[]> {
    return this.http.get<RaceApiItem[]>('/api/races.json');
  }
}
