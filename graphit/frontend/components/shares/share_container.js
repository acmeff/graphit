import { connect } from 'react-redux';
import { getUsers, createShare } from '../../actions/shares_actions';
import { getGraph } from '../../actions/graphs_actions';

import Share from './share';

const mapStateToProps = state => ({
  users: state.users,
  graph: state.graphDetail
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  createShare: share => dispatch(createShare(share)),
  getGraph: graphId => dispatch(getGraph(graphId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Share);
