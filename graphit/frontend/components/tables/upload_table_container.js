import { connect } from 'react-redux';
import UploadTable from './upload_table';
import { createTable } from '../../actions/tables_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.uploadErrors
});

const mapDispatchToProps = dispatch => ({
  createTable: table => dispatch(createTable(table)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadTable);
