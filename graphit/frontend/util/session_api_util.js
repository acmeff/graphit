export const signUp = user => (
  $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user }
  })
);


export const login = user => {
  console.log('api login');
  return $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { user }
  });
};

export const logout = () => (
  $.ajax({
    url: 'api/session',
    method: 'DELETE'
  })
);