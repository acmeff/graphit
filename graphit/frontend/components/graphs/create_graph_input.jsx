import React from 'react';
import PreviewContainer from './preview_container';

class CreateGraphInput extends React.Component{
  constructor(props){
    super(props);

    this.state = {table: '', x: -1, y: -1, y2: -1, y3: -1, axisOpts: [], tableId: 0};

    this.generateTableOptions = this.generateTableOptions.bind(this);
    this.generateAxisOptions = this.generateAxisOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
              <option default disabled>Choose a Data Set</option>
              {this.generateTableOptions()}
            </select>
            <select name='x-select'
              onChange={this.handleChange('x')}
              value={this.state.x}>
              <option default disabled>X-Axis</option>
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
          </form>
        </section>

        <PreviewContainer tableId={this.state.tableId}
                          x={this.state.x}
                          y={this.state.y}
                          y2={this.state.y2}
                          y3={this.state.y3}/>
      </section>
    );

  }
}

export default CreateGraphInput;