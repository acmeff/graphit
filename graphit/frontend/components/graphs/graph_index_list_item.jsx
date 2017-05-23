import React from 'react';
import { Link } from 'react-router-dom';

class GraphIndexListItem extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteGraph(this.props.graph);
  }

  render(){
    console.log(this.props);
    return(

        <li className="graph-li">
          <Link to={`/graphs/${this.props.graph.id}`} className='graph-link'>
            <h3 className='item-title'>{this.props.graph.title}</h3>
            <i className={`fa fa-${this.props.graph.format}-chart fa-5x ${this.props.graph.format}`}></i>
          </Link>
          <Link to={`/tables/${this.props.graph.tableId}`}>
            <h4>See Data Source</h4>
          </Link>
          <button className='delete-button' onClick={this.handleDelete}><i className="fa fa-trash-o trash-can fa-3x" aria-hidden="true"></i></button>
        </li>

    );
  }
}

export default GraphIndexListItem;
