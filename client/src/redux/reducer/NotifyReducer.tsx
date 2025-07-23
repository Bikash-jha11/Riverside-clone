import { TYPES } from "../actions/notifyAction";

const initialState = {};

export const notifyReducer = (state = initialState, action: any) => {
  switch (action.types) {
    case TYPES.NOTIFY:
      return action.payload;
    default:
      return state;
  }
};
