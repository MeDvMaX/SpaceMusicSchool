import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BlockCardItem } from 'src/modules/interfaces/blocks.interface';

@Component({
  selector: 'block-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockCardComponent implements OnInit {

  index = 1;

  @Input() title: string = '';
  @Input() cards: BlockCardItem[] = [];
  @Input() withImage: string | boolean = false;

  constructor() { }

  style(card: BlockCardItem): Record<string, string> {
    return {'background-image': `url(${card.image?.src})`};
  }

  ngOnInit(): void {
  }

}
