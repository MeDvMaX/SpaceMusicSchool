import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockGalleryComponent} from './gallery.component';
import { TuiButtonModule } from '@taiga-ui/core';



@NgModule({
  declarations: [
    BlockGalleryComponent
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
  ],
  exports: [
    BlockGalleryComponent
  ]
})
export class BlockGalleryModule { }
