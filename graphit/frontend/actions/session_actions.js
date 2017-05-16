import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch => (
  APIUtil.login(user).then(newUser => dispatch(receiveUser(user)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(emptyObj => dispatch(receiveUser(emptyObj)))
);

export const signUp = user => dispatch => (
  APIUtil.signUp(user).then(newUser => dispatch(receiveUser(user)))
);
