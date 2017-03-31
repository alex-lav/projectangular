import { Routes } from '@angular/router';
import { App } from './app.component';
import { animalAppRoutes } from './app/animalApp.routes';

export const routes: Routes = [
  {
    path: '',
    children: animalAppRoutes
  }
];

