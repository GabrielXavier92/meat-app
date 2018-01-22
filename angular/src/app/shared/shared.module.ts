import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputComponent } from './input/input.component';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';

@NgModule({
   declarations: [
      InputComponent,
      RadioComponent,
      RatingComponent
   ],
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
   ],
   // as dependencias de exports servem para dizer quais imports aqui dentro
   // declaradas que poderao ser usadas por toda a aplicacao
   exports: [
      InputComponent,
      RadioComponent,
      RatingComponent,
      CommonModule,
      FormsModule,
      ReactiveFormsModule
   ]
})
export class SharedModule {  }