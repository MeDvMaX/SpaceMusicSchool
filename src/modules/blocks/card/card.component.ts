import {ViewportScroller} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BlockCardItem} from 'src/modules/interfaces/blocks.interface';

@Component({
  selector: 'block-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'id': 'block-card'}
})
export class BlockCardComponent {

  index = 1;

  @Input() title: string = '';
  @Input() cards: BlockCardItem[] = [];
  @Input() withImage: string | boolean = false;

  constructor(private readonly scroller: ViewportScroller) { }

  style(card: BlockCardItem): Record<string, string> {
    return {'background-image': `url(${card.image?.src})`};
  }

  scrollTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }
}
