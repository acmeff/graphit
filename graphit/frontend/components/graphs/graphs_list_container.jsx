import { connect } from 'react-redux';
import { allGraphs } from '../../reducers/selectors';
import GraphsList from './graphs_list';
import { deleteGraph } from '../../actions/graphs_actions';

const mapStateToProps = state => ({
  graphs: allGraphs(state)
});

const mapDispatchToProps = dispatch => ({
  deleteGraph: (graph) => dispatch(deleteGraph(graph))
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphsList);
