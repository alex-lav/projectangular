import { Routes } from '@angular/router';

import { AnimalAppComponent } from './animalApp.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalAddComponent } from './add-animal/add-animal.component';


export const animalAppRoutes: Routes = [
  {
    path: '',
    component: AnimalAppComponent,
    children: [
      {path: 'animallist', component: AnimalListComponent},
      {path: 'animaldetail/:id', component: AnimalDetailComponent},
      {path: 'addanimal', component: AnimalAddComponent},
      {path: '', redirectTo: '/animallist', pathMatch: "full"}
    ]
  },
];

