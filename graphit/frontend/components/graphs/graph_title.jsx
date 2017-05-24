import React from 'react';

class GraphTitle extends React.Component{
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.handleTitle(e.target.value);
  }

  render(){
    const title = this.props.title;
    return (
      <input type='text'
        onChange={this.handleChange}
        placeholder='Title'
        value={title}
        className='title-input'>
      </input>
    );
  }
}

export default GraphTitle;
