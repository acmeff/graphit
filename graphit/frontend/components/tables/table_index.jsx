import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';

import TableDetailContainer from './table_detail_container';
import TableIndexSidebar from './table_index_sidebar';
import TableIndexList from './table_index_list';

class TableIndex extends React.Component{

  componentDidMount(){
    this.props.getTables();
  }

  render(){


    return(

      <section className='tables-section'>
        <section className='tables-list-section'>
          <TableIndexSidebar/>
          <h3>Available Data Sets</h3>
          <TableIndexList tables={this.props.tables}/>
        </section>
        <Switch>
          <Route path='/tables/:tableId' component={TableDetailContainer}/>
          <Route component={()=><TableIndexList tables={this.props.tables}/>}/>
        </Switch>
      </section>

    );
  }
}


export default TableIndex;
