export interface ICartItem {
  id: string;
  img: string;
  title: string;
  price: string;
  amount: number;
}

export type AppContextType = {
  loading: boolean;
  cart: Map<string, ICartItem>;
  clearCart: () => void;
  removeItem: (id: string) => void;
};

export interface IState {
  loading: boolean;
  cart: Map<string, ICartItem>;
}

export type ActionType =
  | {
      type: "CLEAR_CART";
    }
  | { type: "REMOVE"; payload: string };
