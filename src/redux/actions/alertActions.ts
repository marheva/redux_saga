import { Alert } from "../types/Alert/Alert";
import { SET_ALERT, AlertActionTypes } from "../types/Alert/type";

export function setAlertAction(value: Alert): AlertActionTypes {
  return {
    type: SET_ALERT,
    payload: value,
  };
}
