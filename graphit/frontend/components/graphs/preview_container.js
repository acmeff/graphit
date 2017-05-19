import { connect } from 'react-redux';
import { getTable } from '../../actions/tables_actions';
import Preview from './preview';
import { contentArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  table: state.tableDetail,
  tableContent: contentArray(state.tableDetail)
});

const mapDispatchToProps = dispatch => ({
  getTable: tableId => dispatch(getTable(tableId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
