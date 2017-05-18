import { connect } from 'react-redux';
import { getTable } from '../../actions/tables_actions';
import Preview from './preview';

const mapStateToProps = state => ({
  table: state.tableDetail
});

const mapDispatchToProps = dispatch => ({
  getTable: tableId => dispatch(getTable(tableId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
