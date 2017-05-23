import SessionReducer from './session_reducer';
import TablesReducer from './tables_reducer';
import TableDetailReducer from './table_detail_reducer';
import ErrorsReducer from './errors_reducer';
import GraphsReducer from './graphs_reducer';
import GraphDetailReducer from './graph_detail_reducer';
import SharesReducer from './shares_reducer';
import UsersReducer from './users_reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  shares: SharesReducer,
  session: SessionReducer,
  tables: TablesReducer,
  tableDetail: TableDetailReducer,
  errors: ErrorsReducer,
  graphs: GraphsReducer,
  graphDetail: GraphDetailReducer,
  users: UsersReducer
});

export default rootReducer;
