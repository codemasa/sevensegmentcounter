# Seven Segment Counter

This is a ReactJS component that is a simple counter you can implement in your webapp. It is stylized to look like a seven segment analog display.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Node Package Manager (NPM): https://nodejs.org/en/
* ReactJS: https://reactjs.org/


### Installing

Easy install through npm:
```
npm install --save seven-segment-counter
```
* In JS file:
```
import SevenSegmentCounter from 'seven-segment-counter';
```


Put on your local machine:
* Download project
* Take app.js and put it into directory
* In JS file:
```
import SevenSegmentCounter from <path-to-file>;
```

### Usage:
* In render method:
```
 <SevenSegmentCounter index={-1} height={75} width={300} onColor={"#FFFFFF"} offColor={"#444444"} backgroundColor={"#000000"}/>
```
* Properties:

| Property      | Type          | Description   |
| ------------- |:-------------:| -------------:|
| index         | integer       | starting value of counter - 1 |
| width         | integer       | width of counter |
| onColor       | string of hex or color | color of numbers |
| offColor       | string of hex or color | color of the number inverse |
| backgroundColor       | string of hex or color | color of the background |


## Built With

* [ReactJS](https://reactjs.org/) - The web framework used
* [Babel](https://babeljs.io/) - File converter
* [Webpack](https://webpack.js.org/) - Module bundler

## Authors

* **Cody Abe** - *Initial work* - [CodeMasa](https://github.com/CodeMasa)

## License

This project is licensed under the ISC License
