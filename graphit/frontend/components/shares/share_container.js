import { connect } from 'react-redux';
import { getUsers } from '../../actions/shares_actions';

import Share from './share';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Share);
