export const createShare = share => (
  $.ajax({
    url: 'api/shares',
    method: 'POST',
    data: { share }
  })
);

export const deleteShare = shareId => (
  $.ajax({
    url: `api/shares/${shareId}`,
    method: 'DELETE'
  })
);

export const getShares = () => (
  $.ajax({
    url: `api/shares`,
    method: 'GET'
  })
);


export const getUsers = () => (
  $.ajax({
    url: `api/users`,
    method: 'GET'
  })
);
