import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AnimalDetailComponent } from './animal-detail.component';


@NgModule({
  declarations: [AnimalDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  exports: [AnimalDetailComponent]
})
export class AnimalDetailModule {


}
