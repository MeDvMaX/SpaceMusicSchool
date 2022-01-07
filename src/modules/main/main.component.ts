import { Component, OnInit } from '@angular/core';
import { Image } from '../interfaces/base.interface';
import { BlockCardItem, BlockCardReviewItem, BlockFormItem, BlockMainItem, BlockShowRoomItem } from '../interfaces/blocks.interface';

@Component({
  selector: 'page-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class PageMainComponent implements OnInit {

  main: BlockMainItem = {
    title: 'Открой сердце музыке',
    discription: '',
    buttonTitle: 'Записаться на занятие',
    butoonLink: '',
  };

  showRoom: BlockShowRoomItem = {
    title: 'Хотите создать что-то необычное?',
    discription: 'Мы поможем...',
    images: [
      {
        src: '/assets/max.png',
        link: '',
        title: 'Учись музыке, что бы создавать собственные произведения'
      },
      {
        src: '/assets/max.png',
        link: '',
        title: 'Запиши что угодно в студийном качестве'
      },
      {
        src: '/assets/max.png',
        link: '',
        title: 'Создай собственный клип и стань звездой YouTube или поделись с друзьями'
      },
    ]
  };

  cards: [BlockCardItem, BlockCardItem, BlockCardItem] = [
    {
      title: 'Свободные занятия',
      discription: 'Хочется попробовать все и сразу',
      icon: 'string',
      link: 'string',
    },
    {
      title: 'Обучение по программе',
      discription: 'У нас есть три программы для обучения фортепиано, гитаре и вокалу',
      icon: 'string',
      link: 'string',
    },
    {
      title: 'Комплексное обучение',
      discription: 'Создай собственное произведение, клип или запиши песню. Круто, да?',
      icon: 'string',
      link: 'string',
    }
  ];

  cardsImage: [BlockCardItem, BlockCardItem, BlockCardItem] = [
    {
      title: 'Фортепьно',
      discription: 'Клавишные всегда в моде, занимайся когда хочешь и сколько хочешь',
      icon: 'string',
      link: 'string',
      image: {
        src: '/assets/piano.png',
        link: 'piano'
      },
    },
    {
      title: 'Гитара',
      discription: 'Акустическая, электро или бас гитара - если для тебя это не пустой звук, занимайся когда хочешь и сколько хочешь',
      icon: 'string',
      link: 'string',
      image: {
        src: '/assets/guitar.png',
        link: 'guitar'
      }
    },
    {
      title: 'Вокал',
      discription: 'Попробуй себя в вокале, занимайся когда хочешь и сколько хочешь',
      icon: 'string',
      link: 'string',
      image: {
        src: '/assets/voice.png',
        link: 'voice'
      }
    }
  ];

  reviewCards: [BlockCardReviewItem, BlockCardReviewItem, BlockCardReviewItem] = [
    {
      title: '\"\"',
      discription: 'Круто, если будут реальные отзывы, а ещё лучше видео-отзывы. Круто, если будут реальные отзывы, а ещё лучше видео-отзывы',
      comment: {
        author: 'Кристина Назарова',
        icon: '/assets/max.png',
      },
    },
    {
      title: '\"\"',
      discription: 'Круто, если будут реальные отзывы, а ещё лучше видео-отзывы. Круто, если будут реальные отзывы, а ещё лучше видео-отзывы',
      comment: {
        author: 'Кристина Назарова',
        icon: '/assets/max.png',
      },
    },
    {
      title: '\"\"',
      discription: 'Круто, если будут реальные отзывы, а ещё лучше видео-отзывы. Круто, если будут реальные отзывы, а ещё лучше видео-отзывы',
      comment: {
        author: 'Кристина Назарова',
        icon: '/assets/max.png',
      },
    }
  ];

  gallery: [Image, Image] = [
    {
      title: 'Максик',
      subtitle: 'Основатель SpaceMusic',
      src: '/assets/max.png',
      link: 'string',
    },
    {
      title: 'Лёха',
      subtitle: 'Основатель SpaceMusic',
      src: '/assets/max.png',
      link: 'string',
    }
  ];

  form: BlockFormItem = {
    title: 'Бесплатное занятие',
    discription: 'Приходи на первое занятие и узнай, что медведь на ухо никому не наступает. ',
    buttonTitle: 'Записаться'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
