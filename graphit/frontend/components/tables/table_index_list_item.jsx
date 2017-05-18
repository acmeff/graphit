import React from 'react';
import { Link } from 'react-router-dom';

class TableIndexListItem extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteTable(this.props.table);
  }

  render(){
    return(

        <li className="table-li">
          <Link to={`/tables/${this.props.table.id}`}>
            <span className='item-title'>{this.props.table.title}</span>
            <span className='cols'>{this.props.table.columns.join(',  ')}</span>
          </Link>
          <button className='delete-button' onClick={this.handleDelete}><img src='assets/icon-trash-can.png'></img></button>
        </li>

    );
  }
}

export default TableIndexListItem;