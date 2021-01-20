import { UserActionTypes } from "../types/User/type";
import { FIND_EMPLOYEE, FIND_CUSTOMER } from "../types/types";
import { User } from "../types/User/User";
import { Customer } from "../types/User/Customer";

export interface AlertReducerStateTypes {
  employee: User;
  customer: Customer;
}

const initialState: AlertReducerStateTypes = {
  employee: { name: { first: "" } },
  customer: { name: { first: "" } },
};

export default function userReducer(state = initialState, action: UserActionTypes) {
  switch (action.type) {
    case FIND_EMPLOYEE:
      return { ...state, employee: action.payload };
    case FIND_CUSTOMER:
      return { ...state, customer: action.payload };
    default:
      return state;
  }
}
