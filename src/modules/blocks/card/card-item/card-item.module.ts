import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item.component';
import { TuiIslandModule } from '@taiga-ui/kit';



@NgModule({
  declarations: [
    CardItemComponent
  ],
  imports: [
    CommonModule,
    TuiIslandModule,
  ],
  exports: [
    CardItemComponent
  ]
})
export class CardItemModule { }
