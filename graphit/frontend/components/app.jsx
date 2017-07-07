import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, Switch } from '../util/route_util';

import AuthFormContainer from './session/auth_form_container';
import GraphIndexContainer from './graphs/graph_index_container';
import NavContainer from './nav/nav_container';
import SplashContainer from './splash/splash_container';
import UploadTableContainer from './tables/upload_table_container';
import TableIndexContainer from './tables/table_index_container';
import CreateGraph from './graphs/create_graph';

const App = () => (
  <section className='app'>
    <NavContainer/>
    <Route exact path='/' component={SplashContainer}/>

    <AuthRoute path='/signup' component={AuthFormContainer}/>
    <AuthRoute path='/signin' component={AuthFormContainer}/>
    <ProtectedRoute path='/graphs' component={GraphIndexContainer}/>
    <ProtectedRoute path='/new-data' component={UploadTableContainer}/>

    <ProtectedRoute path='/tables'component={TableIndexContainer}/>
    <ProtectedRoute path='/new-graph' component={CreateGraph}/>
  </section>
);

export default App;
