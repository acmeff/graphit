import { connect } from 'react-redux';
import TableDetail from './table_detail';
import { getTable } from '../../actions/tables_actions';
import { contentArray, columns } from '../../reducers/selectors';

const mapStateToProps = state => ({
  table: state.tableDetail,
  content: contentArray(state.tableDetail)
});

const mapDispatchToProps = dispatch => ({
  getTable: tableId => dispatch(getTable(tableId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableDetail);
