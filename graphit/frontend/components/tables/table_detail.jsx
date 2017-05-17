import React from 'react';

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
      <section>
        {this.props.table.title}
        <ol>

        </ol>
      </section>
    );
  }
}

export default TableDetail;
