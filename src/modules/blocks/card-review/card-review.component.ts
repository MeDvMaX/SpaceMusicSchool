import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BlockCardReviewItem } from 'src/modules/interfaces/blocks.interface';

@Component({
  selector: 'block-card',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockCardReviewComponent implements OnInit {

  @Input() title: string = '';
  @Input() cards: BlockCardReviewItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
