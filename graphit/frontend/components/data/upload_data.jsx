import React from 'react';
import DropToUpload from 'react-drop-to-upload';

class UploadData extends React.Component{
  constructor(props){
    super(props);

    this.handleDrop =this.handleDrop.bind(this);
  }

  handleDrop(files){
    console.log(files);
  }

  render(){
    return(
      <section>
        <h1>Upload your data files</h1>
        <DropToUpload className='upload-box'
             onDrop={this.handleDrop}>
             Drop files here
        </DropToUpload>
      </section>
    );
  }
}

export default UploadData;
