import React from 'react';
import PreviewContainer from './preview_container';

class CreateGraphInput extends React.Component{
  constructor(props){
    super(props);

    this.state = {table: '', x: -1, y: -1, axisOpts: [], tableId: 0};

    this.generateTableOptions = this.generateTableOptions.bind(this);
    this.generateAxisOptions = this.generateAxisOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.runData = this.runData.bind(this);
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

  runData(e){
    e.preventDefault();
  }

  render(){
    return(
      <section className='graph-input-section'>
        <form className='graph-input-form'>
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
            <option default disabled>Y-Axis</option>
            {this.state.axisOpts}
          </select>
          <button onClick={this.runData}>Run</button>
        </form>

        <PreviewContainer tableId={this.state.tableId}
                          x={this.state.x}
                          y={this.state.y}/>
      </section>
    );

  }
}

export default CreateGraphInput;
