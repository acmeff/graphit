import React from 'react';
import { Link } from 'react-router-dom';

const TableIndexSidebar = (props) => {
  const listItems = props.tables.map((table, idx) => (
    <Link key={idx}
      to={`/tables/${table.id}`}>
      <li className="side-li">{table.title}</li>
    </Link>
  ));

  return (
    <section className='index-sidebar'>
      <h2 className='sidebar-head'>Your Data</h2>
      <Link className='link-button' to='/new-data'>Add a new table</Link>
      <h3><Link to='/tables'>All Data Sets</Link></h3>
      <ul className='side-list'>
        {listItems}
      </ul>
    </section>
  );
};

export default TableIndexSidebar;
