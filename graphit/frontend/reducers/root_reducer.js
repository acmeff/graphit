import SessionReducer from './session_reducer';
import TablesReducer from './tables_reducer';
import TableDetailReducer from './table_detail_reducer';
import ErrorsReducer from './errors_reducer';
import GraphsReducer from './graphs_reducer';
import GraphDetailReducer from './graph_detail_reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: SessionReducer,
  tables: TablesReducer,
  tableDetail: TableDetailReducer,
  errors: ErrorsReducer,
  graphs: GraphsReducer,
  graphDetail: GraphDetailReducer
});

export default rootReducer;
