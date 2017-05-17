import React from 'react';
import { Link } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';

import TableDetailContainer from './table_detail_container';

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
        <ProtectedRoute path='/tables/:tableId'
                        component={TableDetailContainer}/>
        <ul className='tables-list'>
          {listItems}
        </ul>
      </section>
    );
  }
}


export default TableIndex;
