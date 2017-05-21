import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import DropToUpload from 'react-drop-to-upload';

class UploadTable extends React.Component{
  constructor(props){
    super(props);

    this.handleDrop = this.handleDrop.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {title: '', content: null, format: ''};
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleDrop(files){
    const file = files[0];
    console.log(file);
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        this.display = `File added: ${file.name}`;
        this.setState({content: results.data, format: file.name.slice(file.name.length-3)});
      }
    });
  }


  handleChange(e){
    this.setState({title: e.target.value});
  }

  handleClick(e){
    e.preventDefault();
    this.props.createTable(this.state)
      .then((table) => this.props.history.push(`/tables/${table.id}`));
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
      <section className='upload scroll'>
        <h1>Upload your data file</h1>
        <h4>(Accepted format: csv)</h4>
        <form>
          {this.renderErrors()}
          <input type='text'
                 placeholder='Title'
                 value={this.state.title}
                 onChange={this.handleChange}>
          </input>
          <button onClick={this.handleClick}>Save</button>
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
