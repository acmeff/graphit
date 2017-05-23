import { connect } from 'react-redux';
import GraphIndex from './graph_index';
import { allGraphs } from '../../reducers/selectors';
import { getGraphs } from '../../actions/graphs_actions';
import { getShares } from '../../actions/shares_actions';

const mapStateToProps = state => ({
  graphs: allGraphs(state)
});

const mapDispatchToProps = dispatch => ({
  getGraphs: () => dispatch(getGraphs()),
  getShares: () => dispatch(getShares())
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphIndex);
