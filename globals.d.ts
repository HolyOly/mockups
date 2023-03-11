declare module '*.png';
declare module '*.jpeg';
declare module '*.svg';

declare interface ICard {
  src: string;
  tags: string[];
  alt: string;
}

declare interface IFilter {
  icon: React.ReactElement;
  name: string;
  params: React.ReactElement;
}

declare interface IPerson {
  name: string;
  id: number;
}

declare interface IList {
  info: IPerson[];
}

declare interface IInitialContext {
  removePerson: (id: number) => void;
  users: IPerson[];
}

declare interface IInitLangContext {
  changeLang: (lang: string) => void;
}

declare interface IInitLayoutContext {
  hideMainSection: (isShow: boolean) => void;
}

declare interface IVocabulary {
  [key: string]: { [key: string]: string };
}

declare interface IStateUserProfile {
  firstName: string;
  surName: string;
  photo: string;
  coverPhoto: string;
  status: string | undefined;
  jobPosition: string;
  jobCompany: string;
  university: string;
  location_1: string;
  location_2: string;
  birthday: string;
  email: string;
  phone: string;
  instagram: string;
  linkedin: string;
  personalSite: string;
}

declare interface IWallData {
  date: string;
  author: string;
  id: string;
  text: string | undefined;
  media: File[] | null | undefined;
  likes: number;
  author_photo: string;
}

declare interface IUserProfileDataActions extends IStateUserProfile, IWallData {}
