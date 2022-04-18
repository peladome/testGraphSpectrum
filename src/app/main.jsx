import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-react-charts';
//import 'hammerjs';

const ChartContainer = () => {
  const data = [
    { x: '1', base: 0, y: 0 },
    { x: '2', base: 0, y: 0 },
    { x: '3', base: 0, y: 10 },
    { x: '4', base: 0, y: 0 },
    { x: '5', base: 0, y: 0 },
    { x: '6', base: 0, y: 15 },
    { x: '7', base: 0, y: 15 },
    { x: '8', base: 0, y: 15 },
    { x: '9', base: 0, y: 0 },
    { x: '10', base: 0, y: 0},
    { x: '11', base: 0, y: 20 },
    { x: '12', base: 0, y: 20 },
    { x: '13', base: 0, y: 20 },
    { x: '14', base: 0, y: 0 },
    { x: '15', base: 0, y: 0 },
  ];

  return (
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          type="rangeArea"
          data={data}
          categoryField="x"
          fromField="base"
          toField="y"
        />
      </ChartSeries>
    </Chart>
  );
};

ReactDOM.render(<ChartContainer />, document.querySelector('my-app'));
