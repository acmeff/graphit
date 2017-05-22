import { RECEIVE_SHARE, REMOVE_SHARE, RECEIVE_SHARES } from '../actions/shares_actions';

const SharesReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SHARE:
      return Object.assign({}, state, {[action.share.id]: action.share});
    case RECEIVE_SHARES:
      return action.shares;
    case REMOVE_SHARE:
      const newState = Object.assign({}, state);
      delete newState(action.share.id);
      return newState;
    default:
      return state;
  }
};

export default SharesReducer;
