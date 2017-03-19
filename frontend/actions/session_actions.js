import { signup, login, logout } from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signupUser = user => dispatch => (
  signup(user).then(user1 => dispatch(receiveCurrentUser(user1)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const loginUser = user => dispatch => (
  login(user)
    .then((user1) => dispatch(receiveCurrentUser(user1)))
      .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logoutUser = () => dispatch => (
  logout().then(() => dispatch(receiveCurrentUser(null)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);
