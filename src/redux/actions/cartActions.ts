import { CartItem } from "../types/Cart/CartItem";
import { CartActionTypes } from "../types/Cart/type";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/types";

function total(newCart: CartItem[]) {
  let totalValue = 0;
  for (let i = 0; i < newCart.length; i++) {
    totalValue += newCart[i].price;
  }
  return totalValue;
}

export function addToCartAction(item: CartItem, cart: CartItem[]): CartActionTypes | any {
  const newCart = [...cart, item];
  const newTotal = total(newCart);
  return {
    type: ADD_TO_CART,
    payload: { newCart: newCart, newTotal: newTotal },
  };
}

export function removeFromCartAction(item: CartItem, cart: CartItem[]): CartActionTypes | any {
  let hardCopy = [...cart];
  hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
  const newTotal = total(hardCopy);
  return {
    type: REMOVE_FROM_CART,
    payload: { newCart: hardCopy, newTotal: newTotal },
  };
}
