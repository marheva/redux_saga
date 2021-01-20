import { Dispatch } from "redux";
import { FIND_EMPLOYEE, FIND_CUSTOMER } from "../types/types";

export const findEmployee = () => async (dispatch: Dispatch) => {
  const url = "https://randomuser.me/api/";
  const setHeaders = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res: any = await fetch(url, {
    setHeaders,
  } as RequestInit);
  res = await res.json();
  let employee = res.results[0];
  dispatch({
    type: FIND_EMPLOYEE,
    payload: employee,
  });
};

export const findCustomer = () => async (dispatch: Dispatch) => {
  const url = "https://randomuser.me/api/";
  const setHeaders = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res: any = await fetch(url, {
    setHeaders,
  } as RequestInit);
  res = await res.json();
  let customer = res.results[0];
  dispatch({
    type: FIND_CUSTOMER,
    payload: customer,
  });
};
