import { connect } from 'react-redux';
import TableDetail from './table_detail';
import { getTable } from '../../actions/tables_actions';

const mapStateToProps = state => ({
  table: state.tableDetail
});

const mapDispatchToProps = dispatch => ({
  getTable: tableId => dispatch(getTable(tableId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableDetail);
