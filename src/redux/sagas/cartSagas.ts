import { put, takeEvery, call, all, take, takeLatest } from "redux-saga/effects";
import { ADD_TO_CART, ADD_TO_CART_SAGA, REMOVE_FROM_CART, REMOVE_FROM_CART_SAGA } from "../types/types";

import { CartItem } from "../types/Cart/CartItem";

function total(newCart: CartItem[]) {
  let totalValue = 0;
  for (let i = 0; i < newCart.length; i++) {
    totalValue += newCart[i].price;
  }
  return totalValue;
}

export function* addToCartSaga() {
  const action = yield take([ADD_TO_CART_SAGA]);
  const { cart, item } = action.payload;

  const newCart = [...cart, item];
  const newTotal = total(newCart);

  yield put({
    type: ADD_TO_CART,
    payload: { newCart: newCart, newTotal: newTotal },
  });
}

export function* removeFromCartSaga() {
  const action = yield take([REMOVE_FROM_CART_SAGA]);
  const { cart, item } = action.payload;

  let hardCopy = [...cart];
  hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
  const newTotal = total(hardCopy);

  yield put({
    type: REMOVE_FROM_CART,
    payload: { newCart: hardCopy, newTotal: newTotal },
  });
}

export function* watchAddToCartSaga() {
  yield takeEvery(ADD_TO_CART_SAGA, addToCartSaga);
}

export function* watchRemoveFromCartSaga() {
  yield takeEvery(REMOVE_FROM_CART_SAGA, removeFromCartSaga);
}

export default function* rootSaga() {
  yield all([watchAddToCartSaga(), watchRemoveFromCartSaga()]);
}
