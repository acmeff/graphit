import React from 'react';
import { Link } from 'react-router-dom';

const SplashLoggedOut = () => (
  <section className='hero'>
    <div className='hero-text'>
      <h1>It's your data, just prettier.</h1>
      <h2>Sign up now to start turning all of your data into  graphs.</h2>
    </div>
    <div className='hero-buttons'>
      <Link to='/signin' className='link-button'>Log In</Link>
      <Link to='/signup' className='link-button'>Sign Up</Link>
    </div>
  </section>

);

export default SplashLoggedOut;
