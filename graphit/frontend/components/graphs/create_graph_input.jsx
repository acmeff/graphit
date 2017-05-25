import React from 'react';
import PreviewContainer from './preview_container';
import GraphTitle from './graph_title';

class CreateGraphInput extends React.Component{
  constructor(props){
    super(props);

    this.state = {table: '',
                  x: -1,
                  x2: -1,
                  y: -1,
                  y2: -1,
                  y3: -1,
                  axisOpts: [],
                  tableId: 0,
                  title: ''};

    this.generateTableOptions = this.generateTableOptions.bind(this);
    this.generateAxisOptions = this.generateAxisOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.clearOptions = this.clearOptions.bind(this);
  }

  componentDidMount(){
    this.props.getTables().then(() => this.generateTableOptions());
  }

  generateTableOptions(){
    return this.props.tables.map((table, idx) => (
      <option key={idx} value={idx}>{table.title}</option>
    ));
  }

  generateAxisOptions(tableIdx=0){
    const axisOpts =  this.props.tables[tableIdx].columns.map((col, idx) => (
      <option key={idx} value={idx}>{col}</option>
    ));
    this.setState({axisOpts});

  }

  handleChange(property){
    if (property === 'table'){
      return e => {
        const tableIdx = e.target.value;
        this.setState({[property]: tableIdx, tableId: this.props.tables[tableIdx].id},
          () => this.generateAxisOptions(tableIdx));
      };
    } else {
      return e => this.setState({[property]: e.target.value});
    }
  }

  handleTitle(title){
    this.setState({title});
  }

  clearOptions(e){
    e.preventDefault();
    this.setState({table: '',
                  x: -1,
                  x2: -1,
                  y: -1,
                  y2: -1,
                  y3: -1,
                  axisOpts: [],
                  title: ''});
  }


  render(){
    return(
      <section className='graph-input-section'>
        <section className='graph-input-form-section'>
          <h2>Create a Graph</h2>

          <form className='graph-input-form'>
            <h3>Select what data to include in your new graph</h3>
            <select name='table-select'
              onChange={this.handleChange('table')}
              value={this.state.table}>
              <option default disabled>Choose a data set from your tables</option>
              {this.generateTableOptions()}
            </select>
            <select name='x2-select'
              id='x2-select'
              onChange={this.handleChange('x2')}
              value={this.state.x2}>
              <option default disabled>X-Axis(data)</option>
              {this.state.axisOpts}
            </select>
            <h4>(OR)</h4>
            <select name='x-select'
              id='x-select'
              onChange={this.handleChange('x')}
              value={this.state.x}>
              <option default disabled>X-Axis(category)</option>
              {this.state.axisOpts}
            </select>
            <select name='y-select'
              onChange={this.handleChange('y')}
              value={this.state.y}>
              <option default disabled>Data</option>
              {this.state.axisOpts}
            </select>
            <select name='y2-select'
              onChange={this.handleChange('y2')}
              value={this.state.y2}>
              <option default disabled>Data</option>
              {this.state.axisOpts}
            </select>
            <select name='y3-select'
              onChange={this.handleChange('y3')}
              value={this.state.y3}>
              <option default disabled>Data</option>
              {this.state.axisOpts}
            </select>
            <button onClick={this.clearOptions}>Clear</button>
          </form>
        </section>
        <PreviewContainer tableId={this.state.tableId}
                          x={this.state.x}
                          x2={this.state.x2}
                          y={this.state.y}
                          y2={this.state.y2}
                          y3={this.state.y3}
                          title={this.state.title}/>
      </section>
    );

  }
}

export default CreateGraphInput;
