import { CartItem } from "../types/Cart/CartItem";
import { ADD_TO_CART, REMOVE_FROM_CART, CartActionTypes } from "../types/Cart/type";

export function addToCartAction(item: CartItem): CartActionTypes {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}

export function removeFromCartAction(item: CartItem, cart: CartItem[]): CartActionTypes {
  let hardCopy = [...cart];
  hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
  return {
    type: REMOVE_FROM_CART,
    payload: hardCopy,
  };
}
