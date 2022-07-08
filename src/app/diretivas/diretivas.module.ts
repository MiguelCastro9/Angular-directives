import { DiretivasComponent } from './diretivas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DiretivasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DiretivasComponent
  ]
})
export class DiretivasModule { }
