import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'block-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'id': 'block-map'}
})
export class BlockMapComponent {
}
