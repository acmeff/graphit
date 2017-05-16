import React from 'react';
import ReactDOM from 'react-dom';

import { login, logout, signUp } from './util/session_api_util';

window.login = login;
window.logout = logout;
window.signUp = signUp;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Entry</h1>, root);
});
