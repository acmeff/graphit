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
    <section className='table-detail'>
      <ul className='tables-list'>
        {listItems}
      </ul>
    </section>
  );
};

export default TableIndexList;
