import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderLink } from './header.interface';

@Component({
  selector: 'block-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockHeaderComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }
}
