import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BlockCardItem } from 'src/modules/interfaces/blocks.interface';

@Component({
  selector: 'block-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() cards: BlockCardItem[] = [];
  @Input() withImage: string | boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
