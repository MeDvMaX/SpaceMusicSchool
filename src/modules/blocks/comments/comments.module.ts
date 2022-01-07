import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockCommentsComponent } from './comments.component';



@NgModule({
  declarations: [
    BlockCommentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlockCommentsComponent
  ]
})
export class BlockCommentsModule { }
