import { Component } from '@angular/core';

@Component({
  selector: 'app-races',
  imports: [],
  templateUrl: './races.html',
  styleUrl: './races.css'
})
export class Races {
  protected readonly races = ['Tour de France', 'Giro d\'Italia', 'Vuelta a España'];
}
