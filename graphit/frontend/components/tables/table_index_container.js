import { connect } from 'react-redux';
import TableIndex from './table_index';
import { getTables } from '../../actions/tables_actions';

import { allTables } from '../../reducers/selectors';

const mapStateToProps = state => ({
  tables: allTables(state)
});

const mapDispatchToProps = dispatch => ({
  getTables: () => dispatch(getTables())
});

export default connect(mapStateToProps, mapDispatchToProps)(TableIndex);
