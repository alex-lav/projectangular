import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AnimalAddComponent } from './add-animal.component';

@NgModule({
  declarations: [AnimalAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  exports: [AnimalAddComponent]
})
export class AnimalAddModule {


}
