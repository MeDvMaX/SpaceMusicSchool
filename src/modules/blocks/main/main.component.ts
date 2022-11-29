import { ViewportScroller } from '@angular/common';
import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { Router } from '@angular/router';
import {BlockMainItem} from 'src/modules/interfaces/blocks.interface';

@Component({
  selector: 'block-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'id': 'block-main'}
})
export class BlockMainComponent {
  @Input() item: BlockMainItem | null = null;

  constructor(private scroller: ViewportScroller) {}

  scrollTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }
}
