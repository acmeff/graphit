import { connect } from 'react-redux';
import GraphIndex from './graph_index';
import { allGraphs } from '../../reducers/selectors';
import { getGraphs } from '../../actions/graphs_actions';

const mapStateToProps = state => ({
  graphs: allGraphs(state)
});

const mapDispatchToProps = dispatch => ({
  getGraphs: () => dispatch(getGraphs())
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphIndex);
