import React from 'react';

import { Link } from 'react-router-dom';
import GraphIndexListItem from './graph_index_list_item';

class GraphIndexList extends React.Component{
  constructor(props){
    super(props);

    this.generateList = this.generateList.bind(this);
    this.state = {list: []};
  }


  componentWillReceiveProps(newProps){
    if (newProps.location.pathname !== this.props.location.pathname){
      this.generateList();
    }
  }

  generateList(){
    let list;
    if (this.props.location.pathname === '/graphs/mine'){
      list = this.props.myGraphs.map((graph, idx) => (
        <GraphIndexListItem graph={graph}
          deleteGraph={this.props.deleteGraph}
          key={idx}/>
      ));
    } else if (this.props.location.pathname === '/graphs/shared'){
      list = this.props.sharedGraphs.map((graph, idx) => (
        <GraphIndexListItem graph={graph}
          deleteGraph={this.props.deleteGraph}
          deleteShare={this.props.deleteShare}
          key={idx}/>
      ));
    } else {
      list = this.props.graphs.map((graph, idx) => (
        <GraphIndexListItem graph={graph}
          deleteGraph={this.props.deleteGraph}
          deleteShare={this.props.deleteShare}
          key={idx}/>
      ));
    }
    return list;
  }

  render(){
    return(
      <section className='graph-detail scroll-sidebar'>

        <ul className='graphs-list'>
          {this.generateList()}
        </ul>
      </section>
    );
  }
}

export default GraphIndexList;
