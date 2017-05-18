import React from 'react';
import CreateGraphInputContainer from './create_graph_input_container';
import PreviewContainer from './preview_container';

const CreateGraph = (props) => (
  <section className="create-graph scroll">
    <CreateGraphInputContainer/>
    <PreviewContainer/>
  </section>
);

export default CreateGraph;
