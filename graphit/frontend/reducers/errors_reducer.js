import { RECEIVE_UPLOAD_ERRORS } from '../actions/tables_actions';
import { RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';


const defaultState = {
  sessionErrors: [],
  uploadErrors: []
};

const ErrorsReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, {sessionErrors: action.errors.responseJSON});
    case RECEIVE_UPLOAD_ERRORS:
      return Object.assign({}, state, {uploadErrors: action.errors.responseJSON});
    case CLEAR_ERRORS:
      return defaultState;
    default:
      return state;
  }

};

export default ErrorsReducer;
