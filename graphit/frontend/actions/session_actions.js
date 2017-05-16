import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch => (
  APIUtil.login(user).then(newUser => dispatch(receiveCurrentUser(newUser)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => dispatch(receiveCurrentUser(null)))
);

export const signUp = user => dispatch => (
  APIUtil.signUp(user).then(newUser => dispatch(receiveCurrentUser(newUser)))
);
