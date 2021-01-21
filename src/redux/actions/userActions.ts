import { FIND_EMPLOYEE_SAGA, FIND_CUSTOMER_SAGA, FIND_BOTH_SAGA, RACE_ME_SAGA } from "../types/types";

export function findEmployee() {
  return {
    type: FIND_EMPLOYEE_SAGA,
  };
}

export function findCustomer() {
  return {
    type: FIND_CUSTOMER_SAGA,
  };
}

export function findBoth() {
  return {
    type: FIND_BOTH_SAGA,
  };
}

export function raceMe() {
  return {
    type: RACE_ME_SAGA,
  };
}
