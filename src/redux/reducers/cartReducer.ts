import { CartItem } from "../types/Cart/CartItem";
import { CartActionTypes, ADD_TO_CART, REMOVE_FROM_CART } from "../types/Cart/type";

export interface CartReducerStateTypes {
  cart: CartItem[];
}

const initialState: CartReducerStateTypes = {
  cart: [],
};

export default function cartReducer(state = initialState, action: CartActionTypes) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
}
