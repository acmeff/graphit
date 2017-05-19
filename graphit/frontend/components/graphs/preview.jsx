import React from 'react';

class Preview extends React.Component{
  constructor(props){
    super(props);

    this.generateChart = this.generateChart.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (newProps.tableId !== this.props.tableId){
      this.props.getTable(newProps.tableId).then(()=> this.generateChart());
    }
  }


  componentDidUpdate(){
    if (Object.keys(this.props.table).length !== 0){
      this.generateChart();
    }
  }



  generateChart(){
    this.chart = c3.generate({
      bindto: '#preview',
      data: {
          json: this.props.tableContent,
          keys: {value: [this.props.table.columns[this.props.x], this.props.table.columns[this.props.y]]}
        },
        axis: {
          x: {type: this.props.table.columns[this.props.x]},
          y: {type: this.props.table.columns[this.props.y]}
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
