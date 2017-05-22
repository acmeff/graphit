import { RECEIVE_TABLE } from '../actions/tables_actions';

const TableDetailReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TABLE:
      return action.table;
    default:
      return state;
    }
};

export default TableDetailReducer;
