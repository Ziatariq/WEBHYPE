// import { authService } from '../../shared/services/auth.service';
import * as userConstants from "../constants/constants";
import Axios from "axios";


function requestLogin() {
  return {
    type: userConstants.LOGIN_REQUEST,
  };
}

function receiveLogin() {
  return {
    type: userConstants.LOGIN_SUCCESS,
  };
}

function loginError(message) {
  console.log("loginError: ");
  return {
    type: userConstants.LOGIN_FAILURE,
    message,
  };
}

function request() {
  return { type: userConstants.REGISTER_REQUEST };
}
function success(res) {
  return { type: userConstants.REGISTER_SUCCESS, user: res };
}
function failure(res) {
  return { type: userConstants.REGISTER_FAILURE, message: res };
}

let apiUrl = "http://localhost:5001";

export const loginUser = (creds) => (dispatch) => {
  dispatch(requestLogin());
  return Axios.post(`${apiUrl}/app/login`, creds)
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(receiveLogin());
    })
    .catch((err) => {
      dispatch(loginError("invalid user/pass"));
    });
};

export const register = (user) => (dispatch) => {
  dispatch(request());
  return Axios.post(`${apiUrl}/app/register`, user).then(
    (res) => {
      dispatch(success(res.data));
    },
    (error) => {
      dispatch(failure(error.toString()));
    }
  );
};

export const reset = () => (dispatch) => {
  dispatch({
    type: userConstants.REGISTER_RESET,
  });
};


// export const logoutUser = () => (dispatch) => {
//   dispatch(requestLogout());
//   localStorage.removeItem('user');
//   dispatch(receiveLogout());
// }vscvzxc.vmsdfgsdfg
