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
            <h4 className='item-title'>{this.props.table.title}</h4>
            <span className='cols'>{this.props.table.columns}</span>
          </Link>
          <button className='delete-button' onClick={this.handleDelete}><i className="fa fa-trash-o trash-can fa-2x" aria-hidden="true"></i></button>
        </li>

    );
  }
}

export default TableIndexListItem;
