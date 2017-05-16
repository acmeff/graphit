import React from 'react';

class AuthForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {username: '', password: ''};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.type(this.state).then(() => this.props.history.push('/graphs'));
  }

  handleRedirect(e){
    e.preventDefault();
    this.props.history.push(`/${e.target.name}`);
  }

  authType(){
    if (this.props.location.pathname === '/signin'){
      this.type = this.props.login;
      this.typeDisplay = "Login";
      this.altButton = <button name='signup' onClick={this.handleRedirect}>Sign Up</button>;
    } else {
      this.type = this.props.signUp;
      this.typeDisplay = "Sign Up";
      this.altButton = <button name='signin' onClick={this.handleRedirect}>Login</button>;
    }
  }

  renderErrors(){
    return this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
  }


  render(){
    this.authType();
    return(
      <section>
        <form>
          <h1>Welcome to Graphit</h1>
          {this.renderErrors()}
          <input type="text"
            onChange={this.update('username')}
            placeholder='username'
            value={this.state.username}>
          </input>
          <br/>
          <input type="password"
            onChange={this.update('password')}
            placeholder='password'
            value={this.state.password}>
          </input>
          <br/>
          <button onClick={this.handleSubmit}>{this.typeDisplay}</button>
          <br/>
        </form>
        {this.altButton}
      </section>
    );
  }
}

export default AuthForm;
