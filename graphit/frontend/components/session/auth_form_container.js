import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { login, signUp } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signUp: user => dispatch(signUp(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
