import { AlertActionTypes } from "../types/Alert/type";
import { SET_ALERT } from "../types/types";

export interface AlertReducerStateTypes {
  alert: null | string;
}

const initialState: AlertReducerStateTypes = {
  alert: null,
};

export default function alertReducer(state = initialState, action: AlertActionTypes) {
  switch (action.type) {
    case SET_ALERT:
      return { ...state, alert: action.payload };
    default:
      return state;
  }
}
