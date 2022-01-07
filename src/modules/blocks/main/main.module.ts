import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockMainComponent } from './main.component';
import { TuiButtonModule } from '@taiga-ui/core';



@NgModule({
  declarations: [
    BlockMainComponent
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
  ],
  exports: [
    BlockMainComponent
  ]
})
export class BlockMainModule { }
