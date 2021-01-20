import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from "../../redux/rootReducer";
import { addToCartAction, removeFromCartAction } from '../../redux/actions/cartActions'
import { setAlertAction } from '../../redux/actions/alertActions'
import { Alert } from "../../redux/types/Alert/Alert";
interface ShopTypes {
  id: number,
  name: string,
  price: number
}

const Shop = (): JSX.Element => {

  const dispatch = useDispatch()
  const { cart, total } = useSelector((state: AppState) => state.cartReducer)
  const { alert } = useSelector((state: AppState) => state.alertReducer)

  const items: ShopTypes[] = [
    {
      id: 1,
      name: "overwatch",
      price: 20,
    },
    {
      id: 2,
      name: "minecraft",
      price: 32,
    },
    {
      id: 3,
      name: "fortnite",
      price: 51,
    },
  ];

  const addToCart = (el: ShopTypes): void => {
    let addIt = true;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === el.id) addIt = false;
    }
    if (addIt) {
      dispatch(addToCartAction(el, cart))
      dispatch(setAlertAction(null as unknown as Alert))
    }
    else dispatch(setAlertAction(`${el.name} is already in your cart` as unknown as Alert))

  };

  const removeFromCart = (el: ShopTypes): void => {
    dispatch(removeFromCartAction(el, cart))
    dispatch(setAlertAction(null as unknown as Alert))
  };

  const listItems: JSX.Element[] = items.map((el: ShopTypes) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="add" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems: JSX.Element[] = cart.map((el: any) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <div>
      STORE
      <div>{listItems}</div>
      <div>CART</div>
      <div>{cartItems}</div>
      <div>Total: ${total}</div>
      <div>Alert Message: {!!alert && alert}</div>
    </div>
  );
};

export default Shop;
