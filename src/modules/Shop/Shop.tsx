import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from "../../redux/rootReducer";
import { addToCartAction, removeFromCartAction } from '../../redux/actions/cartActions'
import { setAlertAction } from '../../redux/actions/alertActions'
import { findBoth, findCustomer, findEmployee } from '../../redux/actions/userActions'
import { Alert } from "../../redux/types/Alert/Alert";
interface ShopTypes {
  id: number,
  name: string,
  price: number
}

// Just ONE BIG FILE => example!!! no small components!
//
const Shop = (): JSX.Element => {
  const dispatch = useDispatch()

  const { cart, total } = useSelector((state: AppState) => state.cartReducer)
  const { alert } = useSelector((state: AppState) => state.alertReducer)
  const { employee, customer } = useSelector((state: AppState) => state.userReducer)

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

  function callForEmployee() {
    dispatch(findEmployee())
  }

  function callForCustomer() {
    dispatch(findCustomer())
  }

  function callForBoth() {
    dispatch(findBoth())
  }

  function returnEmployee(employeeName?: string): JSX.Element {
    return (<>{`Employee name: ${`first`} ${employeeName}`}
      <input type={'submit'} value={'Find employee'} onClick={() => callForEmployee()} />
    </>)
  }

  function returnCustomer(customerName?: string): JSX.Element {
    return (<>{`Employee name: ${`first`} ${customerName}`}
      <input type={'submit'} value={'Find customer'} onClick={() => callForCustomer()} />
    </>)
  }

  function returnBoth(customerName?: string): JSX.Element {
    return (<>
      <input type={'submit'} value={'Find both'} onClick={() => callForBoth()} />
    </>)
  }

  return (
    <div>
      <div>{returnBoth()}</div>
      STORE
      <div>
        {returnEmployee(employee?.name.first)}
      </div>
      <div>{listItems}</div>
      <div>CART</div>
      <div>{returnCustomer(customer?.name.first)}</div>
      <div>{cartItems}</div>
      <div>Total: ${total}</div>
      <div>Alert Message: {!!alert && alert}</div>
    </div>
  );
};

export default Shop;
