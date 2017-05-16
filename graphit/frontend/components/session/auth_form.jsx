import React from 'react';

class AuthForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {username: '', password: ''};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    this.type(this.state).then(() => this.props.history.push('/graphs'));
  }

  handleDemo(e){
    e.preventDefault();
    this.setState({username: 'Guest', password: 'password'}, () =>
      this.props.login(this.state));
  }

  handleRedirect(e){
    e.preventDefault();
    this.props.history.push(`/${e.target.name}`);
  }

  authType(){
    if (this.props.location.pathname === '/signin'){
      this.type = this.props.login;
      this.typeDisplay = "Login";
      this.altButton = <button name='signup'
                               onClick={this.handleRedirect}>Sign Up</button>;
      this.message = <h3>Please sign in</h3>;
      this.altMessage = <h5>Not a member yet?</h5>
    } else {
      this.type = this.props.signUp;
      this.typeDisplay = "Sign Up";
      this.altButton = <button name='signin'
                               onClick={this.handleRedirect}>Login</button>;
      this.message = <h3>Please create an account</h3>;
      this.altMessage = <h5>Already a member?</h5>
    }
  }

  renderErrors(){
    if (this.props.errors){
      return this.props.errors.map((error, idx) => (
        <li key={idx} className='error'>{error}</li>
      )
    );}
  }


  render(){
    this.authType();
    return(
      <section className='auth-comp'>
        <form className='auth-form'>
          <h1>Welcome to Graphit</h1>
          {this.message}
          {this.renderErrors()}

          <input type="text"
            onChange={this.update('username')}
            value={this.state.username}
            placeholder='username'>
          </input>

          <br/>
          <input type="password"
            onChange={this.update('password')}
            value={this.state.password}
            placeholder="password">
          </input>

          <br/>
          <button onClick={this.handleSubmit}>{this.typeDisplay}</button>
          <button onClick={this.handleDemo} name='demo'>Demo</button>

        </form>
        {this.altMessage}
        <br/>
        {this.altButton}
      </section>
    );
  }
}

export default AuthForm;
