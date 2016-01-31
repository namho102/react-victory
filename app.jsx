import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryBar } from 'victory';
 
import * as lib from './lib';

var arr = lib.shuffle(lib.generateArray(50));
console.log(arr);

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData()
    };
  }

  getData() {
    // return lib.generateData(100);
    return lib.arrayToData(arr.bubblesort());
  }
    
  componentDidMount() {
    // arr.bubblesort()
    setInterval(() => {
      this.setState({
        data: this.getData(),
      });
    }, 10);
  }
  
  render() {
      
    return (
        <VictoryBar
            domain={{y: [0, 50]}}
            width={600}
            height={600}
            // data={arr}
            data={this.state.data}
            dataAttributes={[
                {fill: "cornflowerblue"}
            ]}
        />
    );
  }
}

React.render(<BarChart />, document.getElementById('app'));

// arr.bubblesort();

setTimeout(() => {
    React.render(<BarChart />, document.getElementById('app'));
}, 0);

// setTimeout(() => {
//     console.log('begin sorting');
//     arr.bubblesort();
// }, 3000);