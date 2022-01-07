import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockMapComponent } from './map.component';



@NgModule({
  declarations: [
    BlockMapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlockMapComponent
  ]
})
export class BlockMapModule { }
