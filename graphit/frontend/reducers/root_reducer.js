import SessionReducer from './session_reducer';
import TablesReducer from './tables_reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: SessionReducer,
  table: TablesReducer
});

export default rootReducer;
