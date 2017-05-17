export const createTable = table => (
  $.ajax({
    url: 'api/tables',
    method: 'POST',
    data: { table }
  })
);

export const deleteTable = table => (
  $.ajax({
    url: `api/tables/${table.id}`,
    method: 'DELETE'
  })
);

export const getTable = (tableId) => (
  $.ajax({
    url: `api/tables/${tableId}`,
    method: 'GET'
  })
);

export const getTables = () => (
  $.ajax({
    url: `api/tables`,
    method: 'GET'
  })
);
