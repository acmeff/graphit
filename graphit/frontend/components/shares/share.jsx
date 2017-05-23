import React from 'react';

class Share extends React.Component{
  constructor(props){
    super(props);

    this.state = ({name: '', results: []});

    this.handleInput = this.handleInput.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.handleShare = this.handleShare.bind(this);
    this.nameClick = this.nameClick.bind(this);
  }

  componentDidMount(){
    this.props.getUsers();
    this.props.getGraph(this.props.match.params.graphId);
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
                            graph_id: this.props.match.params.graphId})
                            .then(() => this.props.history.push(`/graphs/${this.props.match.params.graphId}`));
  }

  nameClick(result){
    this.setState({name: result});
  }

  renderResults(){
    let results = Object.keys(this.props.users).filter(user => (
      user.includes(this.state.name)
    ));
    this.setState({results});
  }

  render(){
    const listResults = this.state.results.map((result, idx) => (
      <li key={idx}
          onClick={this.nameClick.bind(this, result)}>
          {result}
      </li>
    ));
    return(
      <section className='scroll-sidebar share'>
        <h1>Share "{this.props.graph.title}" with someone</h1>
        <section className='search-bar'>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type='text'
            onChange={this.handleInput}
            value={this.state.name}
            placeholder='username'>
          </input>
        </section>
        <section id="results">
          <ul>
            {listResults}
          </ul>
        </section>
        <button onClick={this.handleShare}>Share</button>
      </section>
    );
  }
}

export default Share;
