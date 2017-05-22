import React from 'react';
import { Link, Route } from 'react-router-dom';
import GraphIndexSidebar from './graph_index_sidebar';
import GraphsListContainer from './graphs_list_container';

class GraphIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getGraphs();
  }

  render(){
    const graphsList = this.props.graphs.map((graph, idx) => (
      <li key={idx}>{graph.title}</li>
    ));

    return(
      <section className='graph-index'>

        <GraphIndexSidebar graphs={this.props.graphs}/>
        <Route component={GraphsListContainer}/>
      </section>
    );
  }
}

export default GraphIndex;
