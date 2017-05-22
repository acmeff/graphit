import { RECEIVE_GRAPH } from '../actions/graphs_actions';

const GraphDetailReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_GRAPH:
      return action.graph;
    default:
      return state;
    }
};

export default GraphDetailReducer;
