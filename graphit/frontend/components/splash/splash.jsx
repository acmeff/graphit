import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => (
  <section className='splash'>
    <img src='assets/splash-chart.jpg'className='splash-chart'></img>
    <section className='hero'>

      <div className='hero-text'>
        <h1>It's your data, just prettier.</h1>
        <h2>Sign up now to start turning all of your data into  graphs.</h2>
      </div>
      <div className='hero-buttons'>
        <Link to='/signin'><button>Log In</button></Link>
        <Link to='/signup'><button>Sign Up</button></Link>
      </div>
    </section>
    <section className="below-hero">

    </section>
  </section>
);

export default Splash;
