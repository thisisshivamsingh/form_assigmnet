import * as types from "./actionTypes";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_DETAILS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default reducer;
