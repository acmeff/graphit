import React from 'react';
import { Route } from 'react-router-dom';

import AuthFormContainer from './session/auth_form_container';
import GraphIndexContainer from './graphs/graph_index_container';

const App = () => (
  <section>
    <h5>App</h5>
    <Route path='/signup' component={AuthFormContainer}/>
    <Route path='/signin' component={AuthFormContainer}/>
    <Route path='/graphs' component={GraphIndexContainer}/>
  </section>
);

export default App;
