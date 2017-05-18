import React from 'react';
import { Link } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';

import TableDetailContainer from './table_detail_container';
import TableIndexSidebar from './table_index_sidebar';

class TableIndex extends React.Component{

  componentDidMount(){
    this.props.getTables();
  }

  render(){
    const listItems = this.props.tables.map((table, idx) => (
      <Link key={idx}
            to={`/tables/${table.id}`}>
            <li className="table-li">{table.title}</li>
      </Link>
    ));

    return(

      <section className='tables-section'>
        <section className='tables-list-section'>
          <TableIndexSidebar/>
          <h3>Available Data Sets</h3>
          <ul className='tables-list'>
            {listItems}
          </ul>
        </section>
        <ProtectedRoute path='/tables/:tableId'
                        component={TableDetailContainer}/>
      </section>

    );
  }
}


export default TableIndex;
