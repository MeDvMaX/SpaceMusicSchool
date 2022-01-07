import { Component, Input, OnInit } from '@angular/core';
import { BlockMainItem } from 'src/modules/interfaces/blocks.interface';

@Component({
  selector: 'block-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class BlockMainComponent implements OnInit {

  @Input() item: BlockMainItem | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
