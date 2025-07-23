import { TYPES } from "../actions/authAction";

const initialState = {};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPES.AUTH:
      return action.payload;
    default:
      return state;
  }
};
