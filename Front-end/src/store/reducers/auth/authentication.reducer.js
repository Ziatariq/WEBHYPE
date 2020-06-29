import * as userConstants from "../../constants/constants";

let user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  loggedIn: user ? true : false,
  isAuthenticated: false,
  isFetching: false,
  message: "",
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        isFetching: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        isFetching: false,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        message: action.message,
        isAuthenticated: false,
        isFetching: false,
      };
    case userConstants.LOGOUT:
      return {};
    case userConstants.REGISTER_RESET:
      console.log("reset");
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        message: "",
      });
    default:
      return state;
  }
}
