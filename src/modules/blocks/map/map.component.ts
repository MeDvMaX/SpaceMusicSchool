import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'block-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
