import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryBar } from 'victory';
 
import * as lib from './lib';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
    };
  }

  getData() {
    return lib.generateData(20);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: this.getData(),
      });
    }, 1000);
  }
  
  render() {
      
    return (
        <VictoryBar
            domain={{y: [0, 20]}}
            width={500}
            height={500}
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