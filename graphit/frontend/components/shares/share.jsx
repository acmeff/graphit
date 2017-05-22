import React from 'react';

class Share extends React.Component{
  constructor(props){
    super(props);

    this.state = ({name: '', results: []});

    this.handleInput = this.handleInput.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.handleShare = this.handleShare.bind(this);
  }

  componentDidMount(){
    this.props.getUsers();
  }

  handleInput(e){
    this.setState({name: e.target.value}, () => {
      if (this.state.name.length >= 3){
        this.renderResults();
      }
    });
  }

  handleShare(e){
    e.preventDefault();
    this.props.createShare({user_id: this.props.users[this.state.name].id,
                            graph_id: this.props.match.params.graphId});
  }

  renderResults(){
    let results = Object.keys(this.props.users).filter(user => (
      user.includes(this.state.name)
    ));
    this.setState({results});
  }

  render(){
    return(
      <section className='scroll-sidebar share'>
        <h1>SHARE</h1>
        <input type='text'
               onChange={this.handleInput}
               value={this.state.name}>
        </input>
        <section id="results">
          <ul>
            {this.state.results}
          </ul>
        </section>
        <button onClick={this.handleShare}>Share</button>
      </section>
    );
  }
}

export default Share;
