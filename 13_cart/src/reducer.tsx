// import { CLEAR_CART, DECREASE, DISPALY_ITEMS, INCREASE, LOADING, REMOVE } from "./actions";

import { CLEAR_CART, REMOVE } from "./actions";

import { ActionType, IState } from "./interfaces";

export function reducer(state: IState, action: ActionType) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload);
    return { ...state, cart: newCart };
  }

  return state;
}

export default reducer;
