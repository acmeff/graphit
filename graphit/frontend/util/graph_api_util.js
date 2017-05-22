export const createGraph = graph => {
  console.log(graph);
  return (  $.ajax({
    url: 'api/graphs',
    method: 'POST',
    data: { graph }
  }));
};

export const deleteGraph = graph => (
  $.ajax({
    url: `api/graphs/${graph.id}`,
    method: 'DELETE'
  })
);

export const getGraph = (graphId) => (
  $.ajax({
    url: `api/graphs/${graphId}`,
    method: 'GET'
  })
);

export const getGraphs = () => (
  $.ajax({
    url: `api/graphs`,
    method: 'GET'
  })
);
