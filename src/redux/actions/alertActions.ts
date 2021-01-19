import { Alert } from "../types/Alert/Alert";
import { AlertActionTypes } from "../types/Alert/type";
import { SET_ALERT } from "../types/types";

export function setAlertAction(value: Alert): AlertActionTypes {
  return {
    type: SET_ALERT,
    payload: value,
  };
}
