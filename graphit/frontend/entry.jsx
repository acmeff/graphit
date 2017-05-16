import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { login, logout, signUp } from './actions/session_actions';

window.login = login;
window.logout = logout;
window.signUp = signUp;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
