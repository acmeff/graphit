import React from 'react';
import { Link } from 'react-router-dom';

class GraphDetail extends React.Component {
  constructor(props){
    super(props);

    this.generateGraph = this.generateGraph.bind(this);
  }

  componentDidMount(){
    this.props.getGraph(this.props.match.params.graphId).then(() => this.generateGraph());
  }

  componentWillReceiveProps(newProps){
    if (parseInt(newProps.match.params.graphId) !== this.props.graph.id){
      this.props.getGraph(this.props.match.params.graphId).then(() => this.generateGraph());
    }
  }

  generateGraph(){
    this.chart = c3.generate({
      bindto: '#graph-detail',
      padding: {
        right: 100,
        bottom: 100
      },
      data: {
        type: this.props.graph.format,
        columns: this.props.yData,
      },
      color: {
        pattern: ['#3ba8f9', '#f18e43', '#a679bb']
      },
      axis: {
        x: {
            type: 'category',
            categories: this.props.graph.x_data,
            height: 100,
            tick: {
              rotate: 60,
              multiline: false
            }
        }
      }
    });
  }

  render(){
    return(
      <section className='scroll-sidebar graph-detail'>
        <nav className='top'>
          <p className='invisible'>''</p>
          <h1>{this.props.graph.title}</h1>
          <Link to='/graphs'>X</Link>
        </nav>
        <section id="graph-detail"></section>
        <Link to={`/graphs/${this.props.graph.id}/share`} className='link-button'>Share</Link>
      </section>
    );
  }
}

export default GraphDetail;
