export interface ICard {
  id?: number;
  name: string;
  img: string;
  job: string;
  text: string;
  index: number;
  setIndex: (val: () => number) => void;
}
