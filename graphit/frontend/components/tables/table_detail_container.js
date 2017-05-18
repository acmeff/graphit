import { connect } from 'react-redux';
import TableDetail from './table_detail';
import { getTable, deleteTable } from '../../actions/tables_actions';
import { contentArray, columns } from '../../reducers/selectors';

const mapStateToProps = state => ({
  table: state.tableDetail,
  content: contentArray(state.tableDetail)
});

const mapDispatchToProps = dispatch => ({
  getTable: tableId => dispatch(getTable(tableId)),
  deleteTable: table => dispatch(deleteTable(table))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableDetail);
