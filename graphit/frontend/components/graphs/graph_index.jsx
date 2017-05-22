import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import GraphIndexSidebar from './graph_index_sidebar';
import GraphsListContainer from './graphs_list_container';
import GraphDetailContainer from './graph_detail_container';
import ShareContainer from '../shares/share_container';

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
        <Switch>
          <Route exact path='/graphs/:graphId' component={GraphDetailContainer}/>
          <Route path='/graphs/:graphId/share' component={ShareContainer}/>
          <Route component={GraphsListContainer}/>
        </Switch>
      </section>
    );
  }
}

export default GraphIndex;
