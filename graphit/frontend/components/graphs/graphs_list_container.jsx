import { connect } from 'react-redux';
import { allGraphs, myGraphs, sharedGraphs } from '../../reducers/selectors';
import GraphsList from './graphs_list';
import { deleteGraph } from '../../actions/graphs_actions';
import { deleteShare } from '../../actions/shares_actions';

const mapStateToProps = state => ({
  graphs: allGraphs(state),
  myGraphs: myGraphs(state),
  sharedGraphs: sharedGraphs(state)
});

const mapDispatchToProps = dispatch => ({
  deleteGraph: (graph) => dispatch(deleteGraph(graph)),
  deleteShare: share => dispatch(deleteShare(share))
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphsList);
