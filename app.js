import React, { Component } from 'react';
class SevenSegmentCounter extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        index: -1,
        height: this.props.height,
        width: this.props.width,
        offColor: this.props.offColor,
        onColor: this.props.onColor,
        backgroundColor: this.props.backgroundColor;
      }
    }
    componentDidMount() {
        this.updateCanvas(this.state.index)
        if(this.props.currentIndex){
          this.updateCanvas(this.props.currentIndex);
          this.setState((state)=>{
            return{
              index: this.props.currentIndex,
              height: this.props.height,
              width: this.props.width,
              offColor: this.props.offColor,
              onColor: this.props.onColor,
              backgroundColor: this.props.backgroundColor;
            };
          });
        }
        else{
          this.updateCanvas(-1);
        }
    }
    increment() {
      this.setState((state)=>{
        return{
          index: this.state.index + 1,
          height: this.props.height,
          width: this.props.width,
          offColor: this.props.offColor,
          onColor: this.props.onColor,
          backgroundColor: this.props.backgroundColor;
        };
      },()=>{
        this.updateCanvas(this.state.index);
    });


    }
    decrement() {
      if(this.state.index > -2){
        this.setState((state)=>{
          return{
            index: this.state.index - 1,
            height: this.props.height,
            width: this.props.width,
            offColor: this.props.offColor,
            onColor: this.props.onColor,
            backgroundColor: this.props.backgroundColor;
          };
        },() => {
          this.updateCanvas(this.state.index);

        });
      }
    }
    updateCanvas(i) {
        const canvas = this.refs.canvas;
        const context = this.refs.canvas.getContext('2d');
        const canvasWidth = this.state.width;
        const canvasHeight = this.state.height;
        const width = canvasWidth/16;
        const height = canvasHeight/16;
        const space = width/4;
        const centerW = canvasWidth/13;
        const centerH = canvasHeight/6;
        function colorBackground(leftX,topY, width,height, color) {
        	context.fillStyle = color;
        	context.fillRect(leftX,topY, width,height);
        }
        function colorRect(leftX,topY, width,height, color) {
        	context.fillStyle = color;
        	context.fillRect(leftX,topY, width,height);
        }

        function colorCircle(centerX, centerY, radius, color) {
        	context.fillStyle = color;
        	context.beginPath();
        	context.arc(centerX, centerY, radius, 0,Math.PI*2,true);
        	context.fill();
        }

        function colorTriangle(height, base, x, y, color) {
          context.beginPath();
          context.moveTo(x,y);
          context.lineTo(x + base / 2, y + height);
          context.lineTo(x - base / 2, y + height);
          context.closePath();
          context.fillStyle = color;
          context.fill();
        }

        function colorSegment(type, digit, on){


          var color = this.state.offColor;
          if(on == true){
            color = this.state.onColor;
          }
          switch(type) {
            case "A":
              colorRect((space+(digit*width*2))+centerW, 0+centerH, width, height,color);
              break;
            case "B":
              colorRect(((width+space)+(digit*width*2))+centerW, space+centerH  , height, width, color);
              break;
            case "C":
              colorRect(((width+space)+(digit*width*2))+centerW, (width+(space*2))+centerH , height, width, color);
              break;
            case "D":
              colorRect((space+(digit*width*2))+centerW, ((width+space)*2)+centerH, width, height, color);
              break;
            case "E":
              colorRect(((digit*width*2))+centerW, (width+(space*2))+centerH , height, width, color);
              break;
            case "F":
              colorRect(((digit*width*2))+centerW, space+centerH , height, width, color);
              break
            case "G":
              colorRect((space+(digit*width*2))+centerW, (width+space)+centerH, width, height, color);
              break;
            case "DP":
              colorCircle((63+width)+(digit*width*2), (width+25)*2 + 13, height/3, color);
          }

        }

        function colorDigit(digit, value, on=true){
          var numbers = [0x7E	, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];
          var segments = ["A", "B", "C", "D", "E", "F", "G"]
          colorSegment(segments[0], 6-digit, isOn(numbers[value], 6, true));
          colorSegment(segments[1], 6-digit, isOn(numbers[value], 5, true));
          colorSegment(segments[2], 6-digit, isOn(numbers[value], 4, true));
          colorSegment(segments[3], 6-digit, isOn(numbers[value], 3, true));
          colorSegment(segments[4], 6-digit, isOn(numbers[value], 2, true));
          colorSegment(segments[5], 6-digit, isOn(numbers[value], 1, true));
          colorSegment(segments[6], 6-digit, isOn(numbers[value], 0, true));
        }


        function isOn(val, shift,on){
          if(((val >> shift) & 1) && on){
            return true;
          }
          return false;

        }
        colorBackground(0,0,canvas.width, canvas.height, this.state.backgroundColor);
        colorDigit(0, (i+1) % 10);
        colorDigit(1, Math.floor(((i+1)/10))%10);
        colorDigit(2, Math.floor(((i+1)/100))%10);
        colorDigit(3, Math.floor(((i+1)/1000))%10);
        colorDigit(4, Math.floor(((i+1)/10000))%10);
        colorDigit(5, Math.floor(((i+1)/100000))%10);
        colorDigit(6, Math.floor(((i+1)/1000000))%10);

    }
    render() {
        return (
          <div>
            <canvas ref="canvas" width={this.props.width} height={this.props.height}/>
            <button onClick={this.increment.bind(this)}>Increment</button>
            <button onClick={this.decrement.bind(this)}>Decrement</button>
          </div>
        );
    }
}



export default SevenSegmentCounter;
