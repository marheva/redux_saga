import { CartItem } from "../../types/Cart/CartItem";

export default function total(newCart: CartItem[]) {
  let totalValue = 0;
  for (let i = 0; i < newCart.length; i++) {
    totalValue += newCart[i].price;
  }
  return totalValue;
}
