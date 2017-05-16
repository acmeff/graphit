import React from 'react';
import { Route } from 'react-router-dom';
import AuthFormContainer from './session/auth_form_container';

const App = () => (
  <section>
    <h5>App</h5>
    <Route path='/signup' component={AuthFormContainer}/>
    <Route path='/signin' component={AuthFormContainer}/>
  </section>
);

export default App;
