import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Image} from 'src/modules/interfaces/base.interface';

@Component({
  selector: 'block-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'id': 'block-gallery'}
})
export class BlockGalleryComponent {

  @Input() title: string | null = null;
  @Input() images: Image[] | null = null;

  getStyle(image: Image): Record<string, string> {
    return {'background-image': `url(${image?.src})`};
  }

}
