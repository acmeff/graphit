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
                  xHidden: '',
                  x2Hidden: '',
                  infoHidden: 'hide',
                  format: 'bar'};

    this.generateTableOptions = this.generateTableOptions.bind(this);
    this.generateAxisOptions = this.generateAxisOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearOptions = this.clearOptions.bind(this);
    this.selectType = this.selectType.bind(this);
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
        this.setState({[property]: tableIdx,
                       tableId: this.props.tables[tableIdx].id},
          () => this.generateAxisOptions(tableIdx));
      };
    } else {
      return e => this.setState({[property]: e.target.value});
    }
  }

  clearOptions(e){
    e.preventDefault();
    this.setState({table: '',
                  x: -1,
                  x2: -1,
                  y: -1,
                  y2: -1,
                  y3: -1,
                  axisOpts: []});
  }

  selectType(type){
    switch(type)  {
      case 'pie':
        return e => {
          e.preventDefault();
          this.setState({xHidden: 'hide', x2Hidden: 'hide', format: 'pie'});
        };
      case 'bar':
        return e => {
          e.preventDefault();
          this.setState({xHidden: '', x: -1, x2Hidden: 'hide', format: 'bar'});
        };
      case 'line':
        return e => {
          e.preventDefault();
          this.setState({xHidden: 'hide', x2Hidden: '', x2: -1, format: 'line'});
        };
      default:
        return e => {
          e.preventDefault();
          this.setState({xHidden: '', x2Hidden: '', x: -1, x2: -1, format: 'bar'});
        };
    }
}

  render(){
    return(
      <section className='graph-input-section'>
        <section className='graph-input-form-section'>
          <h2>Create a Graph</h2>
          <h4>What type of graph would you like to make?</h4>
          <div className='types-div'>
            <section className='types'>
              <div className='graph-input'onClick={this.selectType('pie')}>
                <i className='fa fa-pie-chart fa-2x pie'></i>

                <span>Pie/Donut</span>
              </div>
              <div className='graph-input'onClick={this.selectType('bar')}>
                <i className='fa fa-bar-chart fa-2x bar'></i><span>Bar</span>
              </div>
            </section>
            <section className='types'>
              <div className='graph-input'onClick={this.selectType('line')}>
                <i className='fa fa-line-chart fa-2x line'></i>
                <span>Line/Spline</span>
              </div>
              <div className='graph-input'onClick={this.selectType('all')}>
                <i className="fa fa-plus fa-2x area" aria-hidden="true"></i>
                <span>All Options</span>
              </div>
            </section>
          </div>
          <form className='graph-input-form'>
            Data Source
            <section className='option'>
              <select onChange={this.handleChange('table')}
                      value={this.state.table}>
                <option default disabled>Choose a data table</option>
                {this.generateTableOptions()}
              </select>
            </section>
              <span className={this.state.xHidden && this.state.x2Hidden ? 'hide':''}>
                X-Axis Options
              </span>
              <section className={`option ${this.state.x2Hidden}`} >
              <select onChange={this.handleChange('x2')} value={this.state.x2}>
                <option default disabled>Data</option>
                {this.state.axisOpts}
              </select>
            </section>
            <section className={`option ${this.state.xHidden}`}>
              <select onChange={this.handleChange('x')} value={this.state.x}>
                <option default disabled>Category</option>
                {this.state.axisOpts}
              </select>
            </section>
            Y-Axis Options
            <select onChange={this.handleChange('y')} value={this.state.y}>
              <option default disabled>Data to display</option>
              {this.state.axisOpts}
            </select>
            <select onChange={this.handleChange('y2')} value={this.state.y2}>
              <option default disabled>Additional Data to display</option>
              {this.state.axisOpts}
            </select>
            <select onChange={this.handleChange('y3')} value={this.state.y3}>
              <option default disabled>Additional Data to display</option>
              {this.state.axisOpts}
            </select>
            <button onClick={this.clearOptions}>Clear All</button>
          </form>
        </section>
        <PreviewContainer tableId={this.state.tableId}
                          x={this.state.x}
                          x2={this.state.x2}
                          y={this.state.y}
                          y2={this.state.y2}
                          y3={this.state.y3}
                          format={this.state.format}/>
      </section>
    );

  }
}

export default CreateGraphInput;
