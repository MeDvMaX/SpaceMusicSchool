import { ViewportScroller } from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'SpaceMusicSchool';

  constructor(private scroller: ViewportScroller) {}

  onClick() {
    this.scroller.scrollToAnchor("form");
  }
}
