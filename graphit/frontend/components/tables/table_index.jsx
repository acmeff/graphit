import React from 'react';
import { Link } from 'react-router-dom';

class TableIndex extends React.Component{

  componentDidMount(){
    this.props.getTables();
  }

  render(){
    const listItems = this.props.tables.map((table, idx) => <Link to={`/tables/${table.id}`}><li key={idx}>{table.title}</li></Link>);
    return(
      <ul>
        {listItems}
      </ul>
    );
  }
}


export default TableIndex;
