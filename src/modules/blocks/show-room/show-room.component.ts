import { Component, Input, OnInit } from '@angular/core';
import { BlockShowRoomItem } from 'src/modules/interfaces/blocks.interface';

@Component({
  selector: 'block-show-room',
  templateUrl: './show-room.component.html',
  styleUrls: ['./show-room.component.less']
})
export class BlockShowRoomComponent implements OnInit {

  @Input() item: BlockShowRoomItem | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
