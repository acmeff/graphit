import { connect } from 'react-redux';
import CreateGraphInput from './create_graph_input';
import { allTables } from '../../reducers/selectors';
import { getTables } from '../../actions/tables_actions';

const mapStateToProps = state => ({
  tables: allTables(state)
});

const mapDispatchToProps = dispatch => ({
  getTables: () => dispatch(getTables())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGraphInput);
