import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import AuthFormContainer from './session/auth_form_container';
import GraphIndexContainer from './graphs/graph_index_container';

const App = () => (
  <section>
    <h5>App</h5>
    <AuthRoute path='/signup' component={AuthFormContainer}/>
    <AuthRoute path='/signin' component={AuthFormContainer}/>
    <ProtectedRoute path='/graphs' component={GraphIndexContainer}/>
  </section>
);

export default App;
