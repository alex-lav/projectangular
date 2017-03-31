import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AnimalAppComponent } from './animalApp.component';
import { RouterModule } from '@angular/router';
import { AnimalListModule } from './animal-list/animal-list.module';
import { AnimalDetailModule } from './animal-detail/animal-detail.module';
import { AnimalAddModule } from './add-animal/add-animal.module';

@NgModule({
  declarations: [
    AnimalAppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AnimalDetailModule,
    RouterModule,
    AnimalListModule,
    AnimalAddModule
  ],
  exports: [AnimalAppComponent]
})
export class AnimalAppModule {
}
