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
                  x2Hidden: ''};

    this.generateTableOptions = this.generateTableOptions.bind(this);
    this.generateAxisOptions = this.generateAxisOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.clearOptions = this.clearOptions.bind(this);
    this.selectPie = this.selectPie.bind(this);
    this.selectBar = this.selectBar.bind(this);
    this.selectLine = this.selectLine.bind(this);
    this.selectAll = this.selectAll.bind(this);
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
                  axisOpts: []});
  }

  selectPie(e){
    e.preventDefault();
    this.setState({xHidden: 'hide', x2Hidden: 'hide'});
  }

  selectBar(e){
    e.preventDefault();
    this.setState({xHidden: '', x2Hidden: 'hide'});
  }

  selectLine(e){
    e.preventDefault();
    this.setState({x2Hidden: '', xHidden: 'hide'});
  }

  selectAll(e){
    e.preventDefault();
    this.setState({xHidden: '', x2Hidden: ''});
  }

  render(){
    return(
      <section className='graph-input-section'>
        <section className='graph-input-form-section'>
          <h2>Create a Graph</h2>

          <section className='option radio'>
            <button className='button-link' onClick={this.selectPie}>Pie/Donut</button>
            <button className='button-link' onClick={this.selectBar}>Bar</button>
            <button className='button-link' onClick={this.selectLine}>Line/Spline</button>
            <button className='button-link' onClick={this.selectAll}>All Options</button>
          </section>
          <form className='graph-input-form'>

            <section className='option'>

              <select name='table-select'
                onChange={this.handleChange('table')}
                value={this.state.table}>
                <option default disabled>Choose a data table</option>
                {this.generateTableOptions()}
              </select>
            </section>
            <section className={`option ${this.state.x2Hidden}`} >
              <select name='x2-select'
                id='x2-select'
                onChange={this.handleChange('x2')}
                value={this.state.x2}>
                <option default disabled>X-Axis(data)</option>
                {this.state.axisOpts}
              </select>
            </section>
            <section className={`option ${this.state.xHidden} ${this.state.x2Hidden}`}>
              <h4>(OR)</h4>
            </section>
            <section className={`option ${this.state.xHidden}`}>

              <select name='x-select'
                id='x-select'
                onChange={this.handleChange('x')}
                value={this.state.x}>
                <option default disabled>X-Axis(category)</option>
                {this.state.axisOpts}
              </select>
            </section>
            <section className='option'>

              <select name='y-select'
                onChange={this.handleChange('y')}
                value={this.state.y}>
                <option default disabled>Data to display</option>
                {this.state.axisOpts}
              </select>
            </section>
            <br/>(Optional)
            <section className='option'>

              <select name='y2-select'
                onChange={this.handleChange('y2')}
                value={this.state.y2}>
                <option default disabled>Data to display</option>
                {this.state.axisOpts}
              </select>
            </section>
            <section className='option'>

              <select name='y3-select'
                onChange={this.handleChange('y3')}
                value={this.state.y3}>
                <option default disabled>Data to display</option>
                {this.state.axisOpts}
              </select>
            </section>
            <button onClick={this.clearOptions}>Clear All</button>
          </form>
        </section>
        <PreviewContainer tableId={this.state.tableId}
                          x={this.state.x}
                          x2={this.state.x2}
                          y={this.state.y}
                          y2={this.state.y2}
                          y3={this.state.y3}/>
      </section>
    );

  }
}

export default CreateGraphInput;
