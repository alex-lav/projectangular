import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AnimalListComponent } from './animal-list.component';


@NgModule({
  declarations: [AnimalListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
  ],
  exports: [AnimalListComponent]
})
export class AnimalListModule {


}
