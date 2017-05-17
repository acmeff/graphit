import { connect } from 'react-redux';
import UploadTable from './upload_table';
import { createTable } from '../../actions/tables_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createTable: table => dispatch(createTable(table))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadTable);
