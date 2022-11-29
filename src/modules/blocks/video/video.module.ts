import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockVideoComponent} from './video.component';
import { TuiCarouselModule } from '@taiga-ui/kit';



@NgModule({
  declarations: [
    BlockVideoComponent
  ],
  imports: [
    CommonModule,
    TuiCarouselModule
  ],
  exports: [
    BlockVideoComponent
  ]
})
export class BlockVideoModule { }
