import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockCardComponent } from './card.component';
import { CardItemModule } from './card-item/card-item.module';
import { TuiIslandModule } from '@taiga-ui/kit';



@NgModule({
  declarations: [
    BlockCardComponent,
  ],
  imports: [
    CommonModule,
    CardItemModule,
    TuiIslandModule,
  ],
  exports: [
    BlockCardComponent
  ]
})
export class BlockCardModule { }
