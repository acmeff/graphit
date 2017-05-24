import { connect } from 'react-redux';
import { getTable, deleteTable } from '../../actions/tables_actions';

import SidebarDetail from './table_index_sidebar_detail';


const mapStateToProps = state => ({
    table: state.tableDetail
});

const mapDispatchToProps = dispatch => ({
  getTable: tableId => dispatch(getTable(tableId)),
  deleteTable: table => dispatch(deleteTable(table))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarDetail);
