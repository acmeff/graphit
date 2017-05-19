import React from 'react';

class Preview extends React.Component{
  constructor(props){
    super(props);

    this.state = {type: 'line', xType: 'category', title: ''};

    this.generateLineGraph = this.generateLineGraph.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.populateColumns = this.populateColumns.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (newProps.tableId !== this.props.tableId){
      this.props.getTable(newProps.tableId);
    }
  }


  componentDidUpdate(){
    if (Object.keys(this.props.table).length !== 0
          && this.props.x >= 0
          && this.props.y >= 0){
      this.generateLineGraph();
    }
  }

  populateColumns(yData){
    console.log(yData);
    yData = yData.filter(y => y !== undefined);
    this.columns = yData.map(y => {
      let data = this.props.table.columns[y];

      let column = this.props.tableContent.map(row => parseInt(row[data]));
      column.unshift(data);
      return column;
    });

    console.log(this.columns);
  }

  populateAttributes(){
    console.log("popatts");
    this.populateColumns([this.props.y, this.props.y2, this.props.y3]);

    this.type = this.props.table.columns[this.props.x];
    this.categories = this.props.tableContent.map(row => row[this.type]);
  }


  generateLineGraph(){
    this.populateAttributes();

    this.chart = c3.generate({
      bindto: '#preview',
      padding: {
        right: 100,
        bottom: 100
      },
      data: {
        type: this.state.type,
        columns: this.columns,
      },
      color: {
        pattern: ['#3bd7f9', '#f93b77', '#f9bd3b']
      },
      axis: {
        x: {
            type: this.state.xType,
            categories: this.categories,
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
