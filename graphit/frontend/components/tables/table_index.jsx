import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';

import TableDetailContainer from './table_detail_container';
import TableIndexSidebarContainer from './table_index_sidebar_container';
import TableIndexListContainer from './table_index_list_container';
import SidebarDetailContainer from './table_index_sidebar_detail_container';

class TableIndex extends React.Component{

  componentDidMount(){
    this.props.getTables();
  }

  render(){


    return(

      <section className='tables-section'>
        <section className='tables-list-section'>
          <TableIndexSidebarContainer/>
          <Route path='/tables/:tableId' component={SidebarDetailContainer}/>
        </section>

        <Switch>
          <Route path='/tables/:tableId' component={TableDetailContainer}/>
          <Route component={TableIndexListContainer}/>
        </Switch>
      </section>

    );
  }
}


export default TableIndex;
