import * as APIUtil from '../util/graph_api_util';

export const RECEIVE_GRAPH = 'RECEIVE_GRAPH';
export const RECEIVE_GRAPHS = 'RECEIVE_GRAPHS';
export const REMOVE_GRAPH = 'REMOVE_GRAPH';
export const CREATE_GRAPH = 'CREATE_GRAPH';
export const RECEIVE_UPLOAD_ERRORS = 'RECEIVE_UPLOAD_ERRORS';

export const receiveGraph = graph => ({
  type: RECEIVE_GRAPH,
  graph
});

export const receiveGraphs = graphs => ({
  type: RECEIVE_GRAPHS,
  graphs
});

export const removeGraph = graph => ({
  type: REMOVE_GRAPH,
  graph
});

export const addGraph = graph => ({
  type: CREATE_GRAPH,
  graph
});

export const receiveUploadErrors = errors => ({
  type: RECEIVE_UPLOAD_ERRORS,
  errors
});

export const createGraph = graph => dispatch => (
  APIUtil.createGraph(graph)
    .then(
      newGraph => {
      dispatch(addGraph(newGraph));
      return newGraph;
      },
      errors => dispatch(receiveUploadErrors(errors))
    )
);

export const getGraph = graphId => dispatch => (
  APIUtil.getGraph(graphId).then(newGraph => dispatch(receiveGraph(newGraph)))
);

export const getGraphs = () => dispatch => (
  APIUtil.getGraphs().then(graphs => dispatch(receiveGraphs(graphs)))
);

export const deleteGraph = graph => dispatch => (
  APIUtil.deleteGraph(graph).then(oldGraph => dispatch(removeGraph(oldGraph)))
);
