import React from 'react';

import { Link } from 'react-router-dom';
import GraphIndexListItem from './graph_index_list_item';

const GraphIndexList = ({graphs, deleteGraph}) => {

  const listItems = graphs.map((graph, idx) => (
    <GraphIndexListItem graph={graph}
                        deleteGraph={deleteGraph}
                        key={idx}/>
  ));
  return(
    <section className='graph-detail scroll-sidebar'>

      <ul className='graphs-list'>
        {listItems}
      </ul>
    </section>
  );
};

export default GraphIndexList;
