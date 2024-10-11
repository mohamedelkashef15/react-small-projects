export interface ISectionTitle {
  name1: string;
  name2: string;
}

export interface IServicesItem {
  id?: number;
  icon: JSX.Element;
  heading: string;
  content: string;
}

export interface ITours {
  id?: number;
  img: string;
  title: string;
  content: string;
  location: JSX.Element;
  initialPrice: string;
  time: string;
  date: string;
}
