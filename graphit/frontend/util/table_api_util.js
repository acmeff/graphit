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

export const getTable = (table) => (
  $.ajax({
    url: `api/tables/${table.id}`,
    method: 'GET'
  })
);

export const getTables = () => (
  $.ajax({
    url: `api/tables`,
    method: 'GET'
  })
);
