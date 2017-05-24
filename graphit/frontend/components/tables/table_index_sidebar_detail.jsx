import React from 'react';
import { Link } from 'react-router-dom';


class SidebarDetail extends React.Component{
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.getTable(this.props.match.params.tableId);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteTable(this.props.table).then(() => this.props.history.push('/tables'));
  }

  render(){
    return(
      <section className='detail-sidebar'>
        <h3>{this.props.table.title}</h3>
        <nav>
          <Link to='/tables'><i className="fa fa-arrow-left" aria-hidden="true"></i>Back to all</Link>
          <Link to='/new-graph'><i className='fa fa-bar-chart'></i>Make a graph</Link>
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

export default SidebarDetail;
