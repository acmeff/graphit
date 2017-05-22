import React from 'react';
import { Link } from 'react-router-dom';
import TableIndexListItem from './table_index_list_item';

const TableIndexList = ({tables, deleteTable}) => {

  const listItems = tables.map((table, idx) => (
    <TableIndexListItem table={table}
                        deleteTable={deleteTable}
                        key={idx}/>
  ));
  return(
    <section className='table-detail scroll-sidebar'>
      <ul className='tables-list'>
        <nav className='top'>
          <li id='table-list-header'>
            <span id='title'>Title</span>
            <span id='cols'>Columns</span>
            <span id='del'>Delete</span>
          </li>
        </nav>
        <ul className='list-items'>
          {listItems}
        </ul>
      </ul>
    </section>
  );
};

export default TableIndexList;
