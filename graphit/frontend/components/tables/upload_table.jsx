import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import DropToUpload from 'react-drop-to-upload';

class UploadTable extends React.Component{
  constructor(props){
    super(props);

    this.handleDrop = this.handleDrop.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
    this.renderErrors = this.renderErrors.bind(this);


    this.state = {title: '', content: null, format: '', errors: [], loading: false};
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleDrop(files){
    const file = files[0];
    let errors = this.state.errors;
    let i = errors.indexOf('Must be a csv file');
    errors.splice(i, 1);
    let j = errors.indexOf('Please provide a csv file');
    errors.splice(j, 1);
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        console.log(results.data);
        let test = file.name.slice(file.name.length-3);
        if (test !== 'csv'){
          errors.push('Must be a csv file');
        } else {
          this.display = `File added: ${file.name}`;
        }
        this.setState({content: results.data, format: file.name.slice(file.name.length-3), errors});
      }
    });
  }


  handleChange(e){
    let errors = this.state.errors;
    this.setState({title: e.target.value});
  }

  handleClick(e){
    e.preventDefault();
    let errors = [];
    if (this.state.title && this.state.format === 'csv'){
      this.setState({loading: true});
      console.log(this.state);
      this.props.createTable(this.state)
      .then((table) => this.props.history.push(`/tables/${table.id}`));
    } else {
      if (!this.state.title){
        errors.push('Please provide a title');
      }
      if (this.state.format === ''){
        errors.push('Please provide a csv file');
      }
    }
    this.setState({errors});
  }

  renderErrors(){
    if (this.state.errors.length > 0){
      return this.state.errors.map((error, idx) => (
        <li key={idx} className='error'>{error}</li>
      )
    );}
  }

  renderLoading(){
    if (this.state.loading){
      return <h1>LOADING<i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i></h1>;
    }
  }

  render(){
    return(
      <section className='upload scroll'>
        <h1>Upload your data file</h1>
        <h4>(Accepted format: csv)</h4>
        <form>
          {this.renderErrors()}
          {this.renderLoading()}
          <input type='text'
                 placeholder='Title'
                 value={this.state.title}
                 onChange={this.handleChange}>
          </input>
          <button onClick={this.handleClick} >Save</button>
        </form>
        <DropToUpload onDrop={this.handleDrop} className='upload-box'>
          <h4>Drag & drop file here</h4>
          <br/>
          <h5>{this.display}</h5>
        </DropToUpload>
      </section>
    );
  }
}

export default UploadTable;
