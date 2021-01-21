import { put, takeEvery, race, all } from "redux-saga/effects";
import {
  FIND_EMPLOYEE,
  FIND_EMPLOYEE_SAGA,
  FIND_CUSTOMER,
  FIND_CUSTOMER_SAGA,
  FIND_BOTH_SAGA,
  RACE_ME_SAGA,
} from "../types/types";

import wait from "./helpers/wait";

export function* findEmployeeSaga() {
  const url = "https://randomuser.me/api/";
  const setHeaders = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = yield fetch(url, setHeaders);
  res = yield res.json();
  let employee = res.results[0];

  yield put({
    type: FIND_EMPLOYEE,
    payload: employee,
  });
}

export function* findCustomerSaga() {
  const url = "https://randomuser.me/api/";
  const setHeaders = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = yield fetch(url, setHeaders);
  res = yield res.json();
  let customer = res.results[0];
  yield put({
    type: FIND_CUSTOMER,
    payload: customer,
  });
}

export function* findBothSaga(): any {
  const url = "https://randomuser.me/api/";
  const setHeaders = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let [employeeFinder, customerFinder] = yield all([fetch(url, setHeaders), fetch(url, setHeaders)]);
  [employeeFinder, customerFinder] = yield all([employeeFinder.json(), customerFinder.json()]);
  [employeeFinder, customerFinder] = yield all([employeeFinder.results[0], customerFinder.results[0]]);

  yield all([
    put({
      type: FIND_EMPLOYEE,
      payload: employeeFinder,
    }),
    put({
      type: FIND_CUSTOMER,
      payload: customerFinder,
    }),
  ]);
}
export function* raceMe() {
  const url = "https://randomuser.me/api/";
  const setHeaders = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { person, timeout } = yield race({
    person: fetch(url, setHeaders),
    timeout: wait(1000),
  });
  if (person) console.log("[RACE_ME => SUCCESS]");
  else console.log("[RACE_ME => TO SLOOOOOOOOOW]");
}

export function* watchFindEmployeeSaga() {
  yield takeEvery(FIND_EMPLOYEE_SAGA, findEmployeeSaga);
}

export function* watchFindCustomerSaga() {
  yield takeEvery(FIND_CUSTOMER_SAGA, findCustomerSaga);
}

export function* watchFindBothSaga() {
  yield takeEvery(FIND_BOTH_SAGA, findBothSaga);
}

export function* watchRaceMeSaga() {
  yield takeEvery(RACE_ME_SAGA, raceMe);
}
