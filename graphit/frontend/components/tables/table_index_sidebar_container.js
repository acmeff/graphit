import { connect } from 'react-redux';
import TableIndexSidebar from './table_index_sidebar';
import { getTables} from '../../actions/tables_actions';
import { allTables } from '../../reducers/selectors';

const mapStateToProps = state => ({
  tables: allTables(state),
});

const mapDispatchToProps = dispatch => ({
  getTables: () => dispatch(getTables()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableIndexSidebar);
