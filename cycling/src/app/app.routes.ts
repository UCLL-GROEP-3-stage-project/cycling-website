import { Routes } from '@angular/router';
import { ChooseRace } from './choose-race/choose-race';

export const routes: Routes = [
    {path: '', redirectTo: 'ChooseRace', pathMatch: 'full' },
    {path: 'ChooseRace', component: ChooseRace},
];
