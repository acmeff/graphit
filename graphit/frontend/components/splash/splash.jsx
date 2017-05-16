import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => (
  <section className='splash'>
    <img src='assets/splash-chart.png'className='splash-chart'></img>
    <section className='hero'>

      <div className='hero-text'>
        <h2>It's your data, just prettier.</h2>
        <p>Sign up now to start turning all of your data into a graph anyone can read</p>
      </div>
      <div className='hero-buttons'>
        <Link to='/signin'><button>Log In</button></Link>
        <Link to='/signup'><button>Sign Up</button></Link>
      </div>
    </section>

  </section>
);

export default Splash;
