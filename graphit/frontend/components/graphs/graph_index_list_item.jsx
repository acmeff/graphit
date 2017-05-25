import React from 'react';
import { Link } from 'react-router-dom';

class GraphIndexListItem extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.sharedBy = this.sharedBy.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    if (this.props.graph.sharerName){
      this.props.deleteShare(this.props.graph.shareId);
    } else {
      this.props.deleteGraph(this.props.graph);
    }
  }

  sharedBy(){
    if (this.props.graph.sharerName){
      return <h4 id='shared-by'>(Shared by: {this.props.graph.sharerName})</h4>;
    }
  }

  getFormat(){
    if (this.props.graph.format === 'donut'){
      this.format = 'pie-chart';
    } else {
      this.format = `${this.props.graph.format}-chart`;
    }

  }

  render(){
    this.getFormat();
    return(

        <li className="graph-li">
          <Link to={`/graphs/${this.props.graph.id}`} className='graph-link'>
            <h3 className='item-title'>{this.props.graph.title}</h3>
            <i className={`fa fa-${this.format} fa-5x ${this.props.graph.format}`} id={this.props.graph.format}></i>
          </Link>
          <Link to={`/tables/${this.props.graph.tableId}`}>
            <h4>See Data Source</h4>
          </Link>
          {this.sharedBy()}
          <nav className='item-options'>
            <button className='delete-button'
              onClick={this.handleDelete}>
              <i className="fa fa-trash-o trash-can fa-3x"
                aria-hidden="true">
              </i>
            </button>
            <Link to={`/graphs/${this.props.graph.id}/share`}>
              <i className="fa fa-share fa-2x"
                aria-hidden="true"></i></Link>
          </nav>
        </li>

    );
  }
}

export default GraphIndexListItem;
