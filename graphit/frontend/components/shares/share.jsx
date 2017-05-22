import React from 'react';

class Share extends React.Component{
  constructor(props){
    super(props);

    this.state = ({name: '', results: []});

    this.handleInput = this.handleInput.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  componentDidMount(){
    this.props.getUsers();
  }

  handleInput(e){
    this.setState({name: e.target.value}, () => this.renderResults());
  }

  renderResults(){
    if (this.state.name in this.props.users){
      this.setState({results:this.props.users[this.state.name]}) ;
    }
  }

  render(){
    console.log(this.state.results);
    return(
      <section className='scroll-sidebar share'>
        <h1>SHARE</h1>
        <input type='text'
               onChange={this.handleInput}
               value={this.state.name}>
        </input>
        <section id="results">
          <ul>
            {this.state.results.username}
          </ul>
        </section>
      </section>
    );
  }
}

export default Share;
