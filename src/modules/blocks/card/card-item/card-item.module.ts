import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardItemComponent} from './card-item.component';
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiButtonModule} from '@taiga-ui/core';



@NgModule({
  declarations: [
    CardItemComponent
  ],
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiButtonModule,
  ],
  exports: [
    CardItemComponent
  ]
})
export class CardItemModule { }
