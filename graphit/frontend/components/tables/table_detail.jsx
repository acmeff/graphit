import React from 'react';
import  JsonTable  from 'react-json-table';

class TableDetail extends React.Component {
  constructor(props){
    super(props);

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
