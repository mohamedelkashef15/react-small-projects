export interface ITour {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
  deleteItem: (id: string) => void;
}
