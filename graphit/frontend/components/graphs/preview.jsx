import React from 'react';

class Preview extends React.Component{
  constructor(props){
    super(props);

    this.state = {type: 'line', xType: 'category'};

    this.generateLineGraph = this.generateLineGraph.bind(this);
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



  generateLineGraph(){
    console.log(this.props);
    console.log(this.props.table.columns[this.props.x]);
    const data = this.props.table.columns[this.props.y];
    const type = this.props.table.columns[this.props.x];
    const categories = this.props.tableContent.map(row => row[type]);
    let columns = this.props.tableContent.map(row => parseInt(row[data]));
    columns.unshift(data);
    columns.pop();
    // debugger

    this.chart = c3.generate({
      bindto: '#preview',
      data: {
        type: this.state.type,
        columns: [
            columns
        ]
      },
      axis: {
        x: {
            type: this.state.xType,
            categories: categories
        }
      }
    });
  }

  render(){
    return(
      <section className='preview' id="preview"></section>
    );
  }
}

export default Preview;
