import { put, takeEvery, all } from "redux-saga/effects";
import { ADD_TO_CART, ADD_TO_CART_SAGA, REMOVE_FROM_CART, REMOVE_FROM_CART_SAGA } from "../types/types";

import total from "./helpers/total";

function wait(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export function* addToCartSaga(action: any) {
  const { cart, item } = action.payload;

  const newCart = [...cart, item];
  const newTotal = total(newCart);

  yield wait(1000);
  yield put({
    type: ADD_TO_CART,
    payload: { newCart: newCart, newTotal: newTotal },
  });
}

export function* removeFromCartSaga(action: any) {
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
