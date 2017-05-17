import React from 'react';


class TableIndex extends React.Component{

  componentDidMount(){
    this.props.getTables();
  }

  render(){
    console.log(this.props.tables);
    const listItems = this.props.tables.map((table, idx) => <li key={idx}>{table.title}</li>);
    return(
      <ul>
        {listItems}
      </ul>
    );
  }
}


export default TableIndex;
