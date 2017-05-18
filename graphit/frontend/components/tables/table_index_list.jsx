import React from 'react';
import { Link } from 'react-router-dom';

const TableIndexList = ({tables}) => {

  const listItems = tables.map((table, idx) => (
    <Link key={idx}
      to={`/tables/${table.id}`}>
      <li className="table-li">{table.title}</li>
    </Link>
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
