import { RECEIVE_TABLES, CREATE_TABLE, REMOVE_TABLE }
  from '../actions/tables_actions';
import merge from 'lodash/merge';

const TablesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TABLES:
      return action.tables;
    case CREATE_TABLE:
      const newTable = {[action.table.id]: {id: action.table.id, title: action.table.title}};
      return merge({}, state, newTable);
    case REMOVE_TABLE:
      const newState = merge({}, state);
      delete newState[action.table.id];
      return newState;
    default:
      return state;
  }
};


export default TablesReducer;
