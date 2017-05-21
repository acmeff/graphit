import React from 'react';
import ReactDOM from 'react-dom';

class Canvas extends React.Component{
  constructor(props){
    super(props);

    this.blueLine = this.blueLine.bind(this);
    this.bars = this.bars.bind(this);
    this.purpleLine = this.purpleLine.bind(this);
    this.incrementLineDownRight = this.incrementLineDownRight.bind(this);
    this.incrementLineUpRight = this.incrementLineUpRight.bind(this);
    this.incrementPurpDownRight = this.incrementPurpDownRight.bind(this);
    this.incrementPurpUpRight = this.incrementPurpUpRight.bind(this);
    this.incrementHeight = this.incrementHeight.bind(this);
  }
    componentDidMount(){
      this.blueCanvas = ReactDOM.findDOMNode(this.refs.splashCanvasBlue);
      this.blue = this.blueCanvas.getContext('2d');
      this.blue.translate(0.5, 0.5);

      this.orangeCanvas = ReactDOM.findDOMNode(this.refs.splashCanvasOrange);
      this.orange = this.orangeCanvas.getContext('2d');
      this.orange.translate(0.5, 0.5);

      this.purpCanvas = ReactDOM.findDOMNode(this.refs.splashCanvasPurp);
      this.purp = this.purpCanvas.getContext('2d');
      this.purp.translate(0.5, 0.5);

      this.blueLine();
      this.purpleLine();
      this.bars();
    }

    purpleLine(){

      this.purp.lineWidth = 3;
      this.purp.lineJoin= 'round';
      this.purp.fillStyle= "#a679bb";
      this.purp.strokeStyle = "#a679bb";
      this.xStartP = 100;
      this.yStartP = 400;
      this.xP = 100;
      this.yP = 400;
      this.clearPurp = setInterval(this.incrementPurpUpRight, 1);
    }

    bars(){
      this.orange.lineWidth = 3;
      this.orange.lineJoin= 'round';
      this.orange.strokeStyle = "#f18e43";
      this.orange.fillStyle = '#f18e43';
      this.h = 0;
      this.clearHeight = setInterval(this.incrementHeight, 1);
    }

    incrementHeight(){
      if (this.h >= 300){
        clearInterval(this.clearHeight);
      } else {
        this.h ++;
        this.orange.fillRect(150, 250, 60, this.h);
        this.orange.fillRect(250, 285, 60, this.h);
        this.orange.fillRect(350, 210, 60, this.h);
        this.orange.fillRect(450, 390, 60, this.h);
        this.orange.fillRect(550, 275, 60, this.h);
        this.orange.fillRect(650, 395, 60, this.h);
        this.orange.fillRect(750, 220, 60, this.h);
        this.orange.fillRect(850, 300, 60, this.h);
        this.render();
      }
    }

    blueLine(){

      this.blue.lineWidth = 3;
      this.blue.lineJoin= 'round';
      this.blue.strokeStyle = "#3ba8f9";
      this.xStart = 100;
      this.yStart = 50;
      this.x = 100;
      this.y = 20;
      this.clear = setInterval(this.incrementLineDownRight, 1);
    }

    incrementLineDownRight(){

      if (this.x > (95 + this.xStart)){
        clearInterval(this.clear);
        this.xStart = this.x;
        this.clear = setInterval(this.incrementLineUpRight, 1);
      } else if(this.x >= 900) {
        clearInterval(this.clear);
      }
      else {
        this.blue.beginPath();
        this.blue.moveTo(this.x, this.y);
        this.x ++;
        this.y ++;
        this.blue.lineTo(this.x, this.y);
        this.blue.stroke();
        this.render();
      }
    }

    incrementPurpUpRight(){

      if (this.xP > (135 + this.xStartP)){
        clearInterval(this.clearPurp);
        this.xStartP = this.xP;
        this.clearPurp = setInterval(this.incrementPurpDownRight, 1);
      } else if(this.xP >= 900) {
        clearInterval(this.Purp);
      } else {
        this.purp.beginPath();
        this.purp.moveTo(this.xP, this.yP);
        this.xP ++;
        this.yP --;
        this.purp.lineTo(this.xP, this.yP);
        this.purp.stroke();
        this.render();
      }
    }

    incrementPurpDownRight(){

      if (this.xP > (95 + this.xStartP)){
        clearInterval(this.clearPurp);
        this.xStartP = this.xP;
        this.clearPurp = setInterval(this.incrementPurpUpRight, 1);
      } else if(this.xP >= 900) {
        clearInterval(this.clearPurp);
      }
      else {
        this.purp.beginPath();
        this.purp.moveTo(this.xP, this.yP);
        this.xP ++;
        this.yP ++;
        this.purp.lineTo(this.xP, this.yP);
        this.purp.stroke();
        this.render();
      }
    }

    incrementLineUpRight(){

      if (this.x > (110 + this.xStart)){
        clearInterval(this.clear);
        this.xStart = this.x;
        this.clear = setInterval(this.incrementLineDownRight, 1);
      } else if(this.x >= 900) {
        clearInterval(this.clear);
      } else {
        this.blue.beginPath();
        this.blue.moveTo(this.x, this.y);
        this.x += 2;
        this.y --;
        this.blue.lineTo(this.x, this.y);
        this.blue.stroke();
        this.render();
      }
    }

    render(){
      return(
        <section className='canvases'>
          <canvas height='500' width='1000' ref='splashCanvasBlue' className='canvas blue'></canvas>
          <canvas height='500' width='1000' ref='splashCanvasOrange' className='canvas orange'></canvas>
          <canvas height='500' width='1000' ref='splashCanvasPurp' className='canvas purp'></canvas>
        </section>
      );
    }
}

export default Canvas;
