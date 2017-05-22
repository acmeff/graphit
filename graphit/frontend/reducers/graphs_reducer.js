import { RECEIVE_GRAPHS, CREATE_GRAPH, REMOVE_GRAPH }
  from '../actions/graphs_actions';
import merge from 'lodash/merge';



const GraphsReducer = (state = {}, action) => {
  console.log(action);
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_GRAPHS:
      return action.graphs;
    case CREATE_GRAPH:
      const newGraph = {[action.graph.id]: {id: action.graph.id, title: action.graph.title}};
      return merge({}, state, newGraph);
    case REMOVE_GRAPH:
      const newState = merge({}, state);
      delete newState[action.graph.id];
      return newState;
    default:
      return state;
  }
};


export default GraphsReducer;
