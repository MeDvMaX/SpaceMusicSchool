import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BlockShowRoomItem} from 'src/modules/interfaces/blocks.interface';

@Component({
  selector: 'block-show-room',
  templateUrl: './show-room.component.html',
  styleUrls: ['./show-room.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'id': 'block-show-room'}
})
export class BlockShowRoomComponent {
  @Input() item: BlockShowRoomItem | null = null;

  carouselIndex = 0;

  getImageClass(index: number): string {
    return 'image-' + (1 + index);
  }
}
