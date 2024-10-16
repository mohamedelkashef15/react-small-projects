export interface ITours {
  tours: ITour[];
  setTours: (data: []) => void;
}

export interface ITour {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
  onDeleteItem: (id: string) => void;
}
