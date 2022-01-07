import {Image} from "./base.interface";

interface BlockBase {
  title: string;
  discription: string;
}

export interface BlockMainItem extends BlockBase {
  buttonTitle: string;
  butoonLink: string;
};

export interface BlockCardItem extends BlockBase {
  icon: string;
  link: string;
  image?: Image;
};

export interface BlockCardReviewItem extends BlockBase {
  comment: {
    author: string;
    icon: string;
  };
};

export interface BlockShowRoomItem extends BlockBase {
  images: Image[]
};

export interface BlockFormItem extends BlockBase {
  buttonTitle: string;
};

