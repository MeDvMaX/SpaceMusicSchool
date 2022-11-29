import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'block-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'id': 'block-footer'}
})
export class BlockFooterComponent {
}
