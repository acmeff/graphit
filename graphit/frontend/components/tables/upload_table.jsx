import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import DropToUpload from 'react-drop-to-upload';

class UploadTable extends React.Component{
  constructor(props){
    super(props);

    this.handleDrop =this.handleDrop.bind(this);
  }

  handleDrop(files){
    console.log(files);
    const file = files[0];
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        console.log(results.data);
        this.props.createTable(
            {content: results.data,
            title: file.name}
          );
        console.log(results);}
      }
    );
  }

  render(){
    return(
      <section>
        <h1>Upload your data files</h1>
        <DropToUpload onDrop={this.handleDrop} className='upload-box'/>
      </section>
    );
  }
}

export default UploadTable;
