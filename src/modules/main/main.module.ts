import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMainComponent } from './main.component';
import { BlockHeaderModule } from '../blocks/header/header.module';
import { BlockMainModule } from '../blocks/main/main.module';
import { BlockCardModule } from '../blocks/card/card.module';
import { BlockShowRoomModule } from '../blocks/show-room/show-room.module';
import { BlockGalleryModule } from '../blocks/gallery/gallery.module';
import { BlockFormModule } from '../blocks/form/form.module';
import { BlockMapModule } from '../blocks/map/map.module';
import { BlockFooterModule } from '../blocks/footer/footer.module';



@NgModule({
  declarations: [
    PageMainComponent
  ],
  imports: [
    CommonModule,
    BlockHeaderModule,
    BlockMainModule,
    BlockCardModule,
    BlockShowRoomModule,
    BlockGalleryModule,
    BlockFormModule,
    BlockMapModule,
    BlockFooterModule,
  ]
})
export class PageMainModule { }
