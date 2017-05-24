import React from 'react';
import { Link, Route } from 'react-router-dom';
import GraphSidebarDetailContainer from './graph_index_sidebar_detail_container';

const GraphIndexSidebar = (props) => {
  const listItems = props.graphs.map((graph, idx) => (
    <Link key={idx}
      to={`/graphs/${graph.id}`}>
      <li className="side-li">{graph.title}</li>
    </Link>
  ));

  return (
    <section className='index-sidebar index-sidebar-container'>
      <h2 className='sidebar-head'>Your Graphs</h2>
      <Link className='link-button' to='/new-graph'>Add a new graph</Link>
      <ul className='side-list'>
        <h3><Link to='/graphs'>All Graphs</Link></h3>
        <ul>
          {listItems}
        </ul>
        <h3><Link to='/graphs/mine'>My Graphs</Link></h3>
        <h3><Link to='/graphs/shared'>Shared with me</Link></h3>
      </ul>
      <Route path='/graphs/:graphId' component={GraphSidebarDetailContainer}/>
    </section>
  );
};

export default GraphIndexSidebar;
