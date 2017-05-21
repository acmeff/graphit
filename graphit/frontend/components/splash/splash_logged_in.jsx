import React from 'react';
import { Link } from 'react-router-dom';

const SplashLoggedIn = () => (
  <section className='hero'>
    <div className='hero-text'>
      <h1>Looking for where to start?</h1>
      <h2>Try uploading some data. Or, if you've already done that, go make a new graph!</h2>
    </div>
    <div className='hero-buttons'>
      <Link to='/new-data' className='link-button'>Upload Data</Link>
      <Link to='/new-graph' className='link-button'>Create Graph</Link>
    </div>
  </section>

);

export default SplashLoggedIn;
