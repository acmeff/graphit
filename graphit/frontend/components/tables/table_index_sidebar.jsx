import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TableIndexSidebar extends React.Component {
  constructor(props){
    super(props);

    this.state = {listTables: []};

    this.generateList = this.generateList.bind(this);
  }

  componentDidMount(){
    this.props.getTables();

  }



  generateList(){
    let listTables;
    if (Object.keys(this.props.tables).length > 0){
      listTables = this.props.tables.map((table, idx) => (
        <Link key={idx}
          to={`/tables/${table.id}`}>
          <li className="side-li">{table.title}</li>
        </Link>
      ));
    }
    return listTables;
  }

  generateDetail(){
    if (this.props.match.params.tableId){
      return    (<section className='detail-sidebar'>
                <h3>{this.props.table.title}</h3>
                <nav>
                  <button className='delete-button'
                    onClick={this.handleDelete}>
                    <i className="fa fa-trash-o trash-can fa-1x fa-fw"
                      aria-hidden="true">
                    </i>
                    <span>DELETE</span>
                  </button>
                  <Link to='/new-graph'><i className='fa fa-bar-chart fa-1x'></i>Make a graph</Link>
                </nav>
              </section>);
    }
  }

  render(){
    return (
      <section>
        <section className='index-sidebar'>
          <h2 className='sidebar-head'>Your Data</h2>
          <Link className='link-button' to='/new-data'>Add a new table</Link>
          <ul className='side-list'>
            <h3><Link to='/tables'>All Data Sets</Link></h3>
            <ul>
              {this.generateList()}
            </ul>
          </ul>
        </section>
      </section>
    );
  }
}

export default withRouter(TableIndexSidebar);
