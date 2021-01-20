import { FIND_EMPLOYEE, FIND_CUSTOMER } from "../types";
import { User } from "./User";
import { Customer } from "./Customer";

export interface findEmployee {
  type: typeof FIND_EMPLOYEE;
  payload: User;
}

export interface findCustomer {
  type: typeof FIND_CUSTOMER;
  payload: Customer;
}
export type UserActionTypes = findEmployee | findCustomer;
