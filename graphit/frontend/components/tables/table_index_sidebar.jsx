import React from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import SidebarDetail from './table_index_sidebar_detail';

class TableIndexSidebar extends React.Component {
  constructor(props){
    super(props);

    this.generateList = this.generateList.bind(this);
  }


  generateList(){
    let listTables;
    if (Object.keys(this.props.tables).length > 0){
      listTables = this.props.tables.map((table, idx) => (
        <Link key={idx}
          to={`/tables/${table.id}`}>
          <li className="side-li">{table.title}</li>
        </Link>
      ));
    }
    return listTables;
  }

  render(){
    return (
      <section>
        <section className='index-sidebar'>
          <h2 className='sidebar-head'>Your Data</h2>
          <Link className='link-button' to='/new-data'>Add a new table</Link>
          <ul className='side-list'>
            <h3><Link to='/tables'>All Data Sets</Link></h3>
            <ul>
              {this.generateList()}
            </ul>
          </ul>
        </section>

      </section>
    );
  }
}

export default withRouter(TableIndexSidebar);
