import React, { useState, useEffect } from "react";

interface ShopTypes {
  id: number,
  name: string,
  price: number
}

const Shop = (): JSX.Element => {
  const [cart, setCart] = useState<ShopTypes[]>([]);
  const [alert, setAlert] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

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

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el: ShopTypes): void => {
    let addIt = true;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === el.id) addIt = false;
    }
    if (addIt) {
      setCart([...cart, el]);
      setAlert("");
    } else setAlert(`${el.name} is already in your cart`);
  };

  const removeFromCart = (el: ShopTypes): void => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
    setAlert("");
  };

  const listItems: JSX.Element[] = items.map((el: ShopTypes) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="add" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems: JSX.Element[] = cart.map((el) => (
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
      <div>Total: ${cartTotal}</div>
      <div>Alert Message: {alert}</div>
    </div>
  );
};

export default Shop;
