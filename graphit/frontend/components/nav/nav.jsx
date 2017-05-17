import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props){
    super(props);

    this.handleButton = this.handleButton.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleButton(this.props.loggedIn);
  }

  componentWillReceiveProps(newProps){
    this.handleButton(newProps.loggedIn);
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
  }

  handleButton(user){
    if (user){
      this.button = <button onClick={this.handleLogout}
                            className='button-link'>Log Out</button>;
    } else {
      this.button = <Link to='signin'>Log In</Link>;
    }
  }

  render(){


    return (
      <nav className='main-nav'>
        <Link to='/'><h1>GRAPHIT</h1></Link>
        <ul>
          <Link to='/graphs'>Graphs</Link>
          <Link to='/tables'>Data Tables</Link>
          {this.button}
        </ul>
      </nav>
    );
  }
}

export default Nav;
