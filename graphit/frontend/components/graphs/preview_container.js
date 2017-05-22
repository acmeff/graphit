import { connect } from 'react-redux';
import { getTable } from '../../actions/tables_actions';
import { createGraph } from '../../actions/graphs_actions';
import Preview from './preview';
import { contentArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  table: state.tableDetail,
  tableContent: contentArray(state.tableDetail)
});

const mapDispatchToProps = dispatch => ({
  getTable: tableId => dispatch(getTable(tableId)),
  createGraph: graph => dispatch(createGraph(graph))
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
