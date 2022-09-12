import * as types from "./actionTypes";

export const loginDetails = (form) => {
  console.log(form);
  return {
    type: types.LOGIN_DETAILS,
    payload: form,
  };
};
