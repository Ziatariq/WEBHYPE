
// import { authService } from '../../shared/services/auth.service';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(token) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export const loginUser = (creds) => (dispatch) => {
  dispatch(requestLogin(creds.username));
  return authService.attemptAuth(creds.username, creds.password)
    .then((response) =>  {
      const token = response.getIdToken().getJwtToken();
      const refreshToken = response.getRefreshToken().getToken();
      
      if (!token) {
        dispatch(loginError('failed to get token.'));
        return Promise.reject();
      } else {
        localStorage.setItem('user', token);
        localStorage.setItem('refresh', refreshToken);
        dispatch(receiveLogin(token))
      }
      return response;
    }).catch(err => {
      console.log(err);
        dispatch(loginError('invalid user/pass'));
    });
}

// export const logoutUser = () => (dispatch) => {
//   dispatch(requestLogout());
//   localStorage.removeItem('user');
//   dispatch(receiveLogout());
// }