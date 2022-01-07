import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockGalleryComponent } from './gallery.component';



@NgModule({
  declarations: [
    BlockGalleryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlockGalleryComponent
  ]
})
export class BlockGalleryModule { }
