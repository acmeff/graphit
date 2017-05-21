import React from 'react';
import SplashLoggedOut from './splash_logged_out';
import SplashLoggedIn from './splash_logged_in';
import Canvas from './canvas';

class Splash extends React.Component {
  constructor(props){
    super(props);

  }

  renderText(){
    if (this.props.loggedIn){
      return <SplashLoggedIn/>;
    } else {
      return <SplashLoggedOut/>;
    }
  }

  render(){
    return (
      <section className='splash'><Canvas/>
        {this.renderText()}

      </section>
    );
  }
}

export default Splash;
