import { connect }  from 'react-redux';
import TableIndexList from './table_index_list';
import { allTables } from '../../reducers/selectors';
import { deleteTable } from '../../actions/tables_actions';

const mapStateToProps = state => ({
  tables: allTables(state)
});

const mapDispatchToProps = dispatch => ({
  deleteTable: table => dispatch(deleteTable(table))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableIndexList);
