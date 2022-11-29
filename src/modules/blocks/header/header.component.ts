import {ViewportScroller} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from '@angular/router';

import {HeaderLink} from './header.interface';

@Component({
  selector: 'block-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'id': 'block-header'}
})
export class BlockHeaderComponent {

  dropdownOpen = false;

  links: HeaderLink[] = [
    {
      title: 'Фортепьяно',
      link: '',
    },
    {
      title: 'Гитара',
      link: '',
    },
    {
      title: 'Вокал',
      link: '',
    },
    {
      title: 'Программы',
      link: '',
    },
    {
      title: 'Отзывы',
      link: '',
    },
    {
      title: 'Контакты',
      link: '',
    }
  ];

  constructor(private readonly router: Router,
              private readonly scroller: ViewportScroller) { }

  scrollTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }

  onSelect(link: string) {
    this.router.navigateByUrl(link);
  }
}
