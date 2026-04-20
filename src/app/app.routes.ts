import { Routes } from '@angular/router';

import { ApiData } from './pages/api-data/api-data';
import { Home } from './pages/home/home';
import { Races } from './pages/races/races';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'races',
    component: Races
  },
  {
    path: 'api-data',
    component: ApiData
  },
  {
    path: '**',
    redirectTo: ''
  }
];
