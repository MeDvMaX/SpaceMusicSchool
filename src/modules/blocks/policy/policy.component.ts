import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'block-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
