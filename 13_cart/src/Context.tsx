import { createContext, useReducer } from "react";
import { AppContextType, IState } from "./interfaces";
import reducer from "./reducer";
import cartItems from "./data";
import { CLEAR_CART, REMOVE } from "./actions";

const initialState: IState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function clearCart() {
    dispatch({ type: CLEAR_CART });
  }

  function removeItem(id: string) {
    console.log(id);
    dispatch({ type: REMOVE, payload: id });
  }

  return <AppContext.Provider value={{ ...state, clearCart, removeItem }}>{children}</AppContext.Provider>;
}

export default AppContext;
