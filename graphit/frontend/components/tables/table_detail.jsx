import React from 'react';

class TableDetail extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.getTable(this.props.match.params.tableId);
  }

  render(){
    console.log(this.props.table.content);
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
