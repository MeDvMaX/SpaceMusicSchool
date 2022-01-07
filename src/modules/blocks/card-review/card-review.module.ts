import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockCardReviewComponent } from './card-review.component';
import { TuiIslandModule, TuiCarouselModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';



@NgModule({
  declarations: [
    BlockCardReviewComponent,
  ],
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiCarouselModule,
    TuiSvgModule,
  ],
  exports: [
    BlockCardReviewComponent
  ]
})
export class BlockCardReviewModule { }
