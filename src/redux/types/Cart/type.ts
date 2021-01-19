import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";
import { CartItem } from "./CartItem";
export interface AddToCart {
  type: typeof ADD_TO_CART;
  payload: CartItem;
}

export interface RemoveFromCart {
  type: typeof REMOVE_FROM_CART;
  payload: CartItem[];
}

export type CartActionTypes = AddToCart | RemoveFromCart;
