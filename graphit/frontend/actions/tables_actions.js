import * as APIUtil from '../util/table_api_util';

export const RECEIVE_TABLE = 'RECEIVE_TABLE';
export const RECEIVE_TABLES = 'RECEIVE_TABLES';
export const REMOVE_TABLE = 'REMOVE_TABLE';
export const CREATE_TABLE = 'CREATE_TABLE';

export const receiveTable = table => ({
  type: RECEIVE_TABLE,
  table
});

export const receiveTables = tables => ({
  type: RECEIVE_TABLES,
  tables
});

export const removeTable = table => ({
  type: REMOVE_TABLE,
  table
});

export const addTable = table => ({
  type: CREATE_TABLE,
  table
});

export const createTable = table => dispatch => (
  APIUtil.createTable(table)
    .then(newTable => {
      dispatch(addTable(newTable));
      return newTable;
    })
);

export const getTable = tableId => dispatch => (
  APIUtil.getTable(tableId).then(newTable => dispatch(receiveTable(newTable)))
);

export const getTables = () => dispatch => (
  APIUtil.getTables().then(tables => dispatch(receiveTables(tables)))
);
