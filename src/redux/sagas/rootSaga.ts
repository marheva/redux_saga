import { all } from "redux-saga/effects";
import { watchAddToCartSaga, watchRemoveFromCartSaga } from "./cartSagas";
import { watchFindCustomerSaga, watchFindEmployeeSaga, watchFindBothSaga, watchRaceMeSaga } from "./userSaga";

export default function* rootSaga() {
  yield all([
    watchAddToCartSaga(),
    watchRemoveFromCartSaga(),
    watchFindEmployeeSaga(),
    watchFindCustomerSaga(),
    watchFindBothSaga(),
    watchRaceMeSaga(),
  ]);
}
