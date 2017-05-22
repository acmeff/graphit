import { RECEIVE_UPLOAD_ERRORS } from '../actions/tables_actions';
import { RECEIVE_SAVE_ERRORS } from '../actions/graphs_actions';
import { RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';


const defaultState = {
  sessionErrors: [],
  uploadErrors: [],
  saveErrors: []
};

const ErrorsReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, {sessionErrors: action.errors.responseJSON});
    case RECEIVE_UPLOAD_ERRORS:
      return Object.assign({}, state, {uploadErrors: action.errors.responseJSON});
    case RECEIVE_SAVE_ERRORS:
      return Object.assign({}, state, {saveErrors: action.errors.responseJSON});
    case CLEAR_ERRORS:
      return Object.assign({}, state, {
        sessionErrors: [],
        uploadErrors: [],
        saveErrors: []
      });
    default:
      return state;
  }

};

export default ErrorsReducer;
