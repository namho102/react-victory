import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryBar } from 'victory';
 
import * as lib from './lib';

var arr = lib.shuffle(lib.generateArray(50));

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData()
    };
  }

  getData() {
    return lib.arrayToData(arr.bubblesort());
  }
    
  componentDidMount() {
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
            data={this.state.data}
            dataAttributes={[
                {fill: "cornflowerblue"}
            ]}
        />
    );
  }
}

<<<<<<< HEAD
React.render(<BarChart />, document.getElementById('app'));
=======
React.render(<BarChart />, document.getElementById('app'));
>>>>>>> 3966359242cdfa47f9fe252534ad1e20f49f2a9a
