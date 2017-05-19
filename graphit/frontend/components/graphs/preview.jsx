import React from 'react';

class Preview extends React.Component{
  constructor(props){
    super(props);

    this.state = {type: 'line', xType: 'category', title: ''};

    this.generateLineGraph = this.generateLineGraph.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (newProps.tableId !== this.props.tableId){
      this.props.getTable(newProps.tableId);
    }
  }


  componentDidUpdate(){
    if (Object.keys(this.props.table).length !== 0
          && this.props.x >= 0
          && this.props.y >= 0
          && this.props.y2 >= 0){
      this.generateLineGraph();
    }
  }



  generateLineGraph(){
    console.log(this.props);
    console.log(this.props.table.columns[this.props.x]);
    const data1 = this.props.table.columns[this.props.y];
    const data2 = this.props.table.columns[this.props.y2];
    const type = this.props.table.columns[this.props.x];
    const categories = this.props.tableContent.map(row => row[type]);
    let column1 = this.props.tableContent.map(row => parseInt(row[data1]));

    column1.unshift(data1);

    column1.pop();

    let column2 = this.props.tableContent.map(row => parseInt(row[data2]));

    column2.unshift(data2);
    column2.pop();

    const columns = [column1, column2];
    // debugger

    this.chart = c3.generate({
      bindto: '#preview',
      padding: {
        right: 100,
        bottom: 100
      },
      data: {
        type: this.state.type,
        columns: columns
      },
      axis: {
        x: {
            type: this.state.xType,
            categories: categories,
            height: 100,
            tick: {
              rotate: 60,
              multiline: false
            }
        }
      }
    });
  }

  handleType(e){
    e.preventDefault();
    this.setState({type: e.target.name});
  }

  handleTitle(e){
    this.setState({title: e.target.value});
  }

  render(){
    return(
      <section className='preview-container'>
        <input type='text'
               onChange={this.handleTitle}
               placeholder='Title'
               value={this.state.title}
               className='title-input'>

        </input>

        <section className='preview' id="preview"></section>
        <ul className='type-opts'>
          <button onClick={this.handleType} name='line'>Line</button>
          <button onClick={this.handleType} name='bar'>Bar</button>
          <button onClick={this.handleType} name='spline'>Spline</button>
          <button onClick={this.handleType} name='area'>Area</button>
        </ul>
      </section>
    );
  }
}

export default Preview;
