import { connect } from 'react-redux';
import CreateGraph from './create_graph';
import { allTables } from '../../reducers/selectors';
import { getTables } from '../../actions/tables_actions';

const mapStateToProps = state => ({
  tables: allTables(state)
});

const mapDispatchToProps = dispatch => ({
  getTables: () => dispatch(getTables())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGraph);
