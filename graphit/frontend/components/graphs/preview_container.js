import { connect } from 'react-redux';
import { getTable } from '../../actions/tables_actions';
import { createGraph } from '../../actions/graphs_actions';
import { clearErrors } from '../../actions/session_actions';
import Preview from './preview';
import { contentArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  table: state.tableDetail,
  tableContent: contentArray(state.tableDetail),
  errors: state.errors.saveErrors
});

const mapDispatchToProps = dispatch => ({
  getTable: tableId => dispatch(getTable(tableId)),
  createGraph: graph => dispatch(createGraph(graph)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
