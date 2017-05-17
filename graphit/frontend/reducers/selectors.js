import values from 'lodash/values';

export const allTables = state => (
  values(state.tables)
);
