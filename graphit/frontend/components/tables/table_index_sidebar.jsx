import React from 'react';
import { Link } from 'react-router-dom';

const TableIndexSidebar = (props) => (
  <section className='table-index-sidebar'>
    <h2>Your Data Sets</h2>
    <Link className='link-button' to='/new-data'>Add a new table</Link>
  </section>
);

export default TableIndexSidebar;
