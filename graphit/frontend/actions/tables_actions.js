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

export const createTable = table => ({
  type: CREATE_TABLE,
  table
});
