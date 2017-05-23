import values from 'lodash/values';

export const allTables = state => (
  values(state.tables)
);

export const contentArray = tableDetail => (
  values(tableDetail.content)
);


export const columns = content => (
  Object.keys(content[0])
);


export const allGraphs = state => (
  values(state.graphs).concat(values(state.shares))
);

export const yDataArray = graphDetail => (
  values(graphDetail.y_data)
);

export const myGraphs = state => (
  values(state.graphs)
);

export const sharedGraphs = state => (
  values(state.shares)
);
