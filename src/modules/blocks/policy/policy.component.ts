import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'block-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'id': 'block-policy'}
})
export class BlockPolicyComponent {
}
