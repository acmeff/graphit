import React from 'react';

class CreateGraph extends React.Component{
  constructor(props){
    super(props);

    this.state = {table: '', x: '', y: '', axisOpts: []};

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
        this.setState({[property]: tableIdx},
        () => this.generateAxisOptions(tableIdx));
      };
    } else {
      return e => this.setState({[property]: e.target.value});
    }
  }

  render(){
    return(
      <section className='scroll-sidebar'>
        <form>
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
        </form>
      </section>
    );

  }
}

export default CreateGraph;
