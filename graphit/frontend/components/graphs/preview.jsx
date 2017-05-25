import React from 'react';
import { withRouter } from 'react-router-dom';

class Preview extends React.Component{
  constructor(props){
    super(props);

    this.state = {format: '',
                  xType: 'category',
                  title: '',
                  y_data: '',
                  x_data: '',
                  table_id: this.props.tableId};

    this.oldProps = {};

    this.generateBarGraph = this.generateBarGraph.bind(this);
    this.generatePieGraph = this.generatePieGraph.bind(this);

    this.handleType = this.handleType.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.populateColumns = this.populateColumns.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps){
    if (newProps.tableId !== this.props.tableId){
      this.props.getTable(newProps.tableId);
    }
    if (newProps.format !== this.props.format){
      this.generateBarGraph();
    }
  }




  populateColumns(yData){
    yData = yData.filter(y => y !== -1);
    this.columns = yData.map(y => {
      let data = this.props.table.columns[y];

      let column = this.props.tableContent.map(row => parseInt(row[data]));
      column.unshift(data);
      return column;
    });
  }

  populateXData(x2){

    if (this.props.x2 !== -1){
      let data = this.props.table.columns[x2];
      let column = this.props.tableContent.map(row => parseInt(row[data]));
      column.unshift('x');
      this.columns.unshift(column);
      this.isX = 'x';
    }
  }

  populateAttributes(){
    this.populateColumns([this.props.y, this.props.y2, this.props.y3]);
    this.populateXData(this.props.x2);

    this.type = this.props.table.columns[this.props.x];
    this.categories = this.props.tableContent.map(row => row[this.type]);
  }


  generateBarGraph(){
    console.log(this.columns);
    this.populateAttributes();
    this.chart = c3.generate({
      bindto: '#bar',
      padding: {
        right: 100,
        bottom: 100
      },
      data: {
        type: this.props.format,
        x: this.isX,
        columns: this.columns,
      },
      color: {
        pattern: ['#3ba8f9', '#f18e43', '#a679bb']
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
      },
      donut:{
        title: 'this is a donut chart'
      }
    });
  }

  generatePieGraph(){
    this.populateAttributes();
    this.chart = c3.generate({
      bindto: '#pie',
      padding: {
        right: 100,
        bottom: 100
      },
      data: {
        type: 'pie',
        columns: this.columns,
      },
      color: {
        pattern: ['#3ba8f9', '#f18e43', '#a679bb']
      }
    });
  }

  handleType(e){
    e.preventDefault();
    this.props.handleFormat(e.target.name);
  }

  handleTitle(e){
    this.setState({title: e.target.value});
  }

  handleSave(e){
    e.preventDefault();
    this.setState({x_data: this.categories, y_data: this.columns, table_id:
      this.props.tableId, format: this.props.format},
    () => this.props.createGraph(this.state).then((graph) =>
      this.props.history.push(`/graphs/${graph.id}`)));
  }

  handleRun(e){
    e.preventDefault();
    this.generateBarGraph();
    this.generatePieGraph();
  }

  renderErrors(){
    if (this.props.errors){
      return this.props.errors.map((error, idx) => (
        <li key={idx} className='error'>{error}</li>
      )
    );}
  }

  render(){
    return(
      <section className='preview-with-run'>
        <button onClick={this.handleRun.bind(this)}>
          See Graph
        </button>
        <div className='preview-container'>
          <header className='preview-header'>
            <input type='text'
              onChange={this.handleTitle}
              placeholder='Title'
              value={this.state.title}
              className='title-input'>

            </input>
            <ul>
              {this.renderErrors()}
            </ul>
            <button onClick={this.handleSave}>Save</button>
          </header>

          <section className='preview' id="bar"></section>
          <ul className='type-opts'>
            <button onClick={this.handleType} name='line'>Line</button>
            <button onClick={this.handleType} name='bar'>Bar</button>
            <button onClick={this.handleType} name='spline'>Spline</button>
            <button onClick={this.handleType} name='area'>Area</button>
            <button onClick={this.handleType} name='pie'>Pie</button>
            <button onClick={this.handleType} name='donut'>Donut</button>
          </ul>
        </div>
      </section>
    );
  }
}

export default withRouter(Preview);
