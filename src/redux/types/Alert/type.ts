import { Alert } from "./Alert";

const SET_ALERT = "ALERT/SET_ALERT";

export interface setAlert {
  type: typeof SET_ALERT;
  payload: Alert;
}

export type AlertActionTypes = setAlert;

export { SET_ALERT };
