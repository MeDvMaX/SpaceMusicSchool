import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockCardReviewComponent} from './card-review.component';
import {TuiIslandModule, TuiCarouselModule, TuiAvatarModule} from '@taiga-ui/kit';
import {TuiButtonModule, TuiSvgModule} from '@taiga-ui/core';



@NgModule({
  declarations: [
    BlockCardReviewComponent,
  ],
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiCarouselModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiAvatarModule,
  ],
  exports: [
    BlockCardReviewComponent
  ]
})
export class BlockCardReviewModule { }
