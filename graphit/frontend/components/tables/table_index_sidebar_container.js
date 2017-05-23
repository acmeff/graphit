import { connect } from 'react-redux';
import TableIndexSidebar from './table_index_sidebar';
import { getTables, getTable } from '../../actions/tables_actions';
import { allTables } from '../../reducers/selectors';

const mapStateToProps = state => ({
  tables: allTables(state),
  table: state.tableDetail
});

const mapDispatchToProps = dispatch => ({
  getTables: () => dispatch(getTables()),
  getTable: tableId => dispatch(getTable(tableId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableIndexSidebar);
