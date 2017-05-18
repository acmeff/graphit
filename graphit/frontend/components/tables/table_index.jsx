import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';

import TableDetailContainer from './table_detail_container';
import TableIndexSidebar from './table_index_sidebar';
import TableIndexListContainer from './table_index_list_container';

class TableIndex extends React.Component{

  componentDidMount(){
    this.props.getTables();
  }

  render(){


    return(

      <section className='tables-section'>
        <section className='tables-list-section'>
          <TableIndexSidebar tables={this.props.tables}/>

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
