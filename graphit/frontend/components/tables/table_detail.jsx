import React from 'react';
import  JsonTable  from 'react-json-table';
import { Link } from 'react-router-dom';

class TableDetail extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.getTable(this.props.match.params.tableId);
  }

  componentWillReceiveProps(newProps){
    if (parseInt(newProps.match.params.tableId) !== this.props.table.id){
      this.props.getTable(this.props.match.params.tableId);
    }
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteTable(this.props.table).then(this.props.history.push('/tables'));
  }

  render(){
    return(

        <section className='table-detail scroll-sidebar'>
          <nav className='top'>
            <p className='invisible'>''</p>
            <h3>{this.props.table.title}</h3>
            <Link to='/tables'>X</Link>
          </nav>
          <div className='table-div'>
            <JsonTable rows={ this.props.content } columns={ this.props.columns } />
          </div>
          <nav className='bottom'>
          </nav>
        </section>


    );
  }
}

export default TableDetail;
