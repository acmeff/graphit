import { connect } from 'react-redux';

import { getGraph, deleteGraph } from '../../actions/graphs_actions';

import GraphSidebarDetail from './graph_index_sidebar_detail';


const mapStateToProps = state => ({
    graph: state.graphDetail
});

const mapDispatchToProps = dispatch => ({
  getGraph: graphId => dispatch(getGraph(graphId)),
  deleteGraph: graph => dispatch(deleteGraph(graph))
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphSidebarDetail);
