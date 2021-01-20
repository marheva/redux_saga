import { CartItem } from "../types/Cart/CartItem";
import { CartActionTypes } from "../types/Cart/type";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/types";

export interface CartReducerStateTypes {
  cart: CartItem[];
  total: number;
}

const initialState: CartReducerStateTypes = {
  cart: [],
  total: 0,
};

export default function cartReducer(state = initialState, action: CartActionTypes | any) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: action.payload.newCart, total: action.payload.newTotal };
    case REMOVE_FROM_CART:
      return { ...state, cart: action.payload.newCart, total: action.payload.newTotal };
    default:
      return state;
  }
}
