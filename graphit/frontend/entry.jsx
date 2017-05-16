import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { login, logout, signUp } from './actions/session_actions';

window.login = login;
window.logout = logout;
window.signUp = signUp;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Entry</h1>, root);
});
