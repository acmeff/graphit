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
      this.canvas = ReactDOM.findDOMNode(this.refs.splashCanvas);
      this.ctx = this.canvas.getContext('2d');

      setTimeout(this.blueLine, 1000);
      setTimeout(this.bars, 4000);
      setTimeout(this.purpleLine, 6000);
    }

    purpleLine(){

      this.ctx.translate(0.5, 0.5);
      this.ctx.lineWidth = 3;
      this.ctx.lineJoin= 'round';
      this.ctx.strokeStyle = "#a679bb";
      this.xStartP = 50;
      this.yStartP = 300;
      this.xP = 50;
      this.yP = 300;
      this.clear = setInterval(this.incrementPurpUpRight, 1);
    }

    bars(){

      this.ctx.translate(-0.5, -0.5);
      this.ctx.lineWidth = 3;
      this.ctx.lineJoin= 'round';
      this.ctx.strokeStyle = "#f18e43";
      this.ctx.fillStyle = '#f18e43';
      this.h = 0;
      this.clearHeight = setInterval(this.incrementHeight, 1);
    }

    incrementHeight(){
      if (this.h >= 450){
        clearInterval(this.clearHeight);
      } else {
        this.h ++;
        this.ctx.fillRect(60, 300, 30, 0 + this.h);
        this.ctx.fillRect(110, 320, 30, 0 + this.h);
        this.ctx.fillRect(160, 350, 30, 0 + this.h);
        this.ctx.fillRect(210, 280, 30, 0 + this.h);
        this.ctx.fillRect(260, 330, 30, 0 + this.h);
        this.ctx.fillRect(310, 420, 30, 0 + this.h);
        this.ctx.fillRect(360, 270, 30, 0 + this.h);
        this.ctx.fillRect(410, 400, 30, 0 + this.h);
        this.render();
      }
    }

    blueLine(){

      this.ctx.translate(0.5, 0.5);
      this.ctx.lineWidth = 3;
      this.ctx.lineJoin= 'round';
      this.ctx.strokeStyle = "#3ba8f9";
      this.xStart = 50;
      this.yStart = 50;
      this.x = 50;
      this.y = 50;
      this.clear = setInterval(this.incrementLineDownRight, 1);
    }

    incrementLineDownRight(){

      if (this.x > (100 + this.xStart)){
        clearInterval(this.clear);
        this.xStart = this.x;
        this.clear = setInterval(this.incrementLineUpRight, 1);
      } else if(this.x >= 450) {
        clearInterval(this.clear);
      }
      else {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.x ++;
        this.y ++;
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
        this.render();
      }
    }

    incrementPurpUpRight(){

      if (this.xP > (110 + this.xStartP)){
        clearInterval(this.clear);
        this.xStartP = this.xP;
        this.clear = setInterval(this.incrementPurpDownRight, 1);
      } else if(this.xP >= 450) {
        clearInterval(this.clear);
      } else {
        this.ctx.beginPath();
        this.ctx.moveTo(this.xP, this.yP);
        this.xP ++;
        this.yP --;
        this.ctx.lineTo(this.xP, this.yP);
        this.ctx.stroke();
        this.render();
      }
    }

    incrementPurpDownRight(){

      if (this.xP > (180 + this.xStartP)){
        clearInterval(this.clear);
        this.xStartP = this.xP;
        this.clear = setInterval(this.incrementPurpUpRight, 1);
      } else if(this.xP >= 450) {
        clearInterval(this.clear);
      }
      else {
        this.ctx.beginPath();
        this.ctx.moveTo(this.xP, this.yP);
        this.xP ++;
        this.yP ++;
        this.ctx.lineTo(this.xP, this.yP);
        this.ctx.stroke();
        this.render();
      }
    }

    incrementLineUpRight(){

      if (this.x > (60 + this.xStart)){
        clearInterval(this.clear);
        this.xStart = this.x;
        this.clear = setInterval(this.incrementLineDownRight, 1);
      } else if(this.x >= 450) {
        clearInterval(this.clear);
      } else {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.x ++;
        this.y --;
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
        this.render();
      }
    }

    render(){
      return(
        <canvas height='500' width='500' ref='splashCanvas' className='canvas'></canvas>
      );
    }
}

export default Canvas;
