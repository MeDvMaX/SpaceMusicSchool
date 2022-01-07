import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'block-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
