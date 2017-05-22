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
    return(

        <li className="graph-li">
          <Link to={`/graphs/${this.props.graph.id}`}>
            <span className='item-title'>{this.props.graph.title}</span>
          </Link>
          <button className='delete-button' onClick={this.handleDelete}><img src='assets/icon-trash-can.png'></img></button>
        </li>

    );
  }
}

export default GraphIndexListItem;
