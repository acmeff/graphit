import { connect } from 'react-redux';
import { deleteGraph, getGraph } from '../../actions/graphs_actions';
import {yDataArray } from '../../reducers/selectors';

import GraphDetail from './graph_detail';

const mapStateToProps = state => ({
  graph: state.graphDetail,
  yData: yDataArray(state.graphDetail)
});

const mapDispatchToProps = dispatch => ({
  deleteGraph: graph => dispatch(deleteGraph(graph)),
  getGraph: graphId => dispatch(getGraph(graphId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphDetail);
