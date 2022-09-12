import * as types from "./actionTypes";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_DETAILS:
      const random = action.payload;
      return initialState;
    default:
      return state;
  }
};

export default reducer;
