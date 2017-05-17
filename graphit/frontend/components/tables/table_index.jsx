import React from 'react';
import { Link } from 'react-router-dom';

class TableIndex extends React.Component{

  componentDidMount(){
    this.props.getTables();
  }

  render(){
    const listItems = this.props.tables.map((table, idx) => <Link className="table-li" key={idx} to={`/tables/${table.id}`}><li>{table.title}</li></Link>);
    return(
      <ul className='tables-list'>
        {listItems}
      </ul>
    );
  }
}


export default TableIndex;
