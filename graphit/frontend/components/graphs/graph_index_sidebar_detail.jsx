import React from 'react';
import { Link } from 'react-router-dom';


class GraphSidebarDetail extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.getGraph(this.props.match.params.graphId);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteGraph(this.props.graph).then(() => this.props.history.push('/graphs'));
  }

  render(){
    return(
      <section className='detail-sidebar'>
        <h3>{this.props.graph.title}</h3>
        <nav>
          <Link to='/graphs'><i className="fa fa-arrow-left" aria-hidden="true"></i>Back to all</Link>
          <Link to={`/graphs/${this.props.graph.id}/share`}><i className='fa fa-share'></i>Share graph</Link>
          <Link to={`/tables/${this.props.graph.table_id}`}>
            <i className="fa fa-table" aria-hidden="true"></i>
            Data Source</Link>
          <button className='delete-button'
                  onClick={this.handleDelete}>
            <i className="fa fa-trash-o fa-fw"
              aria-hidden="true">
            </i>
            <span>DELETE</span>
          </button>
        </nav>
      </section>
    );
  }
}

export default GraphSidebarDetail;
