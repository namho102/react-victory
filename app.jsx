// import React from 'react';
// import HelloWorld from './hello-world';

// React.render(
//     <HelloWorld phrase="ES6"/>,
//     document.body
// );

import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryBar } from 'victory';
 
import * as lib from './lib'; 

class BarChart extends Component {
  render() {
    let arr = lib.generateData(20);
    console.log(arr);
      
    return (
        <VictoryBar
            domain={{y: [0, 20]}}
            // domainPadding={2}
            // padding={75}
            width={500}
            height={500}
            data={arr}
            dataAttributes={[
            {fill: "cornflowerblue"}
            ]}
            // data={[
            //     {x: 1, y: 1},
            //     {x: 2, y: 2},
            //     {x: 3, y: 3},
            //     {x: 4, y: 6},
            //     {x: 5, y: 5},
            //     {x: 6, y: 9},
            //     {x: 7, y: 4},
            //     {x: 8, y: 8},
            //     {x: 9, y: 7}
            // ]}
        />
    );
  }
}

React.render(<BarChart />, document.getElementById('app'));