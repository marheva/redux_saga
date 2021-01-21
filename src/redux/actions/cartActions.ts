import { CartItem } from "../types/Cart/CartItem";
import { CartActionTypes } from "../types/Cart/type";
import { ADD_TO_CART_SAGA, REMOVE_FROM_CART, REMOVE_FROM_CART_SAGA } from "../types/types";

function total(newCart: CartItem[]) {
  let totalValue = 0;
  for (let i = 0; i < newCart.length; i++) {
    totalValue += newCart[i].price;
  }
  return totalValue;
}

export function addToCartAction(item: CartItem, cart: CartItem[]): CartActionTypes | any {
  return {
    type: ADD_TO_CART_SAGA,
    payload: {
      item,
      cart,
    },
  };
}

export function removeFromCartAction(item: CartItem, cart: CartItem[]): CartActionTypes | any {
  return {
    type: REMOVE_FROM_CART_SAGA,
    payload: { item, cart },
  };
}
