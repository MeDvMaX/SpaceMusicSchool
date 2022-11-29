import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockShowRoomComponent} from './show-room.component';
import {TuiCarouselModule} from '@taiga-ui/kit';



@NgModule({
  declarations: [
    BlockShowRoomComponent
  ],
  imports: [
    CommonModule,
    TuiCarouselModule,
  ],
  exports: [
    BlockShowRoomComponent
  ]
})
export class BlockShowRoomModule { }
