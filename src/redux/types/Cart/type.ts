import { CartItem } from "./CartItem";

const ADD_TO_CART = "CART/ADD_TO_CART";
const REMOVE_FROM_CART = "CART/REMOVE_FROM_CART";

export interface AddToCart {
  type: typeof ADD_TO_CART;
  payload: CartItem;
}

export interface RemoveFromCart {
  type: typeof REMOVE_FROM_CART;
  payload: CartItem[];
}

export type CartActionTypes = AddToCart | RemoveFromCart;

export { ADD_TO_CART, REMOVE_FROM_CART };
