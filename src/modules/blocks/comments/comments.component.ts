import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'block-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'id': 'block-comments'}
})
export class BlockCommentsComponent {
}
