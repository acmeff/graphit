import React from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import  JsonTable  from 'react-json-table';

class TableDetail extends React.Component {
  constructor(props){
    super(props);

    this.items = [
      { name: 'Louise', age: 27, color: 'red' },
      { name: 'Margaret', age: 15, color: 'blue'},
      { name: 'Lisa', age:34, color: 'yellow'}
    ];

    this.columns = [
        'name',
        {key: 'age', label: 'Age'},
        {key: 'color', label: 'Colourful', cell: function( item, columnKey ){
            return <span style={{color: item.color}}>{ item.color }</span>;
        }}
    ];

  }

  componentDidMount(){
    this.props.getTable(this.props.match.params.tableId);
  }

  componentWillReceiveProps(newProps){
    if (parseInt(newProps.match.params.tableId) !== this.props.table.id){
      this.props.getTable(this.props.match.params.tableId);
    }
  }

  render(){
    return(
      <section className='table-detail'>
        <h3>{this.props.table.title}</h3>
        <JsonTable rows={ this.props.content } columns={ this.props.columns } />
      </section>

    );
  }
}

export default TableDetail;
