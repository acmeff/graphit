import React from 'react';
import { Link } from 'react-router-dom';
import TableIndexListItem from './table_index_list_item';

const TableIndexList = ({tables, deleteTable}) => {

  const listItems = tables.map((table, idx) => (
    <TableIndexListItem table={table}
                        deleteTable={deleteTable}
                        key={idx}/>
  ));
  let placeHolder;
  if (listItems.length === 0){
    placeHolder = <h4 className='default-index'>You don't have any tables yet. Try uploading some!</h4>;
  }
  return(
    <section className='table-detail scroll-sidebar'>
      <ul className='tables-list'>
        <nav className='top table-list-header'>
          <span id='title'>Title</span>
          <span id='cols'>Columns</span>
          <span id='del'>Delete</span>
        </nav>
        {placeHolder}
        <ul className='list-items'>
          {listItems}
        </ul>
      </ul>
    </section>
  );
};

export default TableIndexList;
