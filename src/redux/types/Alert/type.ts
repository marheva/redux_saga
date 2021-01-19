import { Alert } from "./Alert";
import { SET_ALERT } from "../types";

export interface setAlert {
  type: typeof SET_ALERT;
  payload: Alert;
}

export type AlertActionTypes = setAlert;
