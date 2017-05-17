import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import DropToUpload from 'react-drop-to-upload';

class UploadTable extends React.Component{
  constructor(props){
    super(props);

    this.handleDrop = this.handleDrop.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {title: '', content: null};
  }

  handleDrop(files){
    console.log(files);
    const file = files[0];
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        this.setState({content: results.data});
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

  render(){
    return(
      <section>
        <h1>Upload your data files</h1>
        <form>
          <input type='text'
                 placeholder='Title'
                 value={this.state.title}
                 onChange={this.handleChange}>

          </input>
          <button onClick={this.handleClick}>Save</button>
        </form>
        <DropToUpload onDrop={this.handleDrop} className='upload-box'/>
      </section>
    );
  }
}

export default UploadTable;
