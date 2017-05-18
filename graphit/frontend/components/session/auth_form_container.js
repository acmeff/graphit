import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { login, signUp, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signUp: user => dispatch(signUp(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
