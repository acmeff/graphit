import React from 'react';
import { Link } from 'react-router-dom';

const GraphIndex = () => (
  <section className='scroll'>
    <h1>All the pretty graphs</h1>
    <Link to='/new-graph' className='link-button'>New Graph</Link>
  </section>
);

export default GraphIndex;
