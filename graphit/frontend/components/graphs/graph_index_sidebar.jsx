import React from 'react';
import { Link } from 'react-router-dom';

const GraphIndexSidebar = (props) => {
  const listItems = props.graphs.map((graph, idx) => (
    <Link key={idx}
      to={`/graphs/${graph.id}`}>
      <li className="side-li">{graph.title}</li>
    </Link>
  ));

  return (
    <section className='index-sidebar index-sidebar-container'>
      <h2>Your Graphs</h2>
      <Link className='link-button' to='/new-graph'>Add a new graph</Link>
      <h3><Link to='/graphs'>All Graphs</Link></h3>
      <ul className='side-list'>
        {listItems}
      </ul>
    </section>
  );
};

export default GraphIndexSidebar;
