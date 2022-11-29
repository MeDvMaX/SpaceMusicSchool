import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BlockCardItem} from 'src/modules/interfaces/blocks.interface';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardItemComponent implements OnInit {

  @Input() card: BlockCardItem | null = null;
  @Input() withImage: string | boolean = false;

  get style() {
    return {'background-image': `url(${this.card?.image?.src})`};
  }

  constructor() { }

  ngOnInit(): void {
  }

}
