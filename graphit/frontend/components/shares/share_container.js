import { connect } from 'react-redux';
import { getUsers, createShare } from '../../actions/shares_actions';

import Share from './share';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  createShare: share => dispatch(createShare(share))
});

export default connect(mapStateToProps, mapDispatchToProps)(Share);
