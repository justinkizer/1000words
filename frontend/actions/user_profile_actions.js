import * as UserAPIUtil from '../util/user_api_util.js';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchUser = id => dispatch => (
  UserAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);
