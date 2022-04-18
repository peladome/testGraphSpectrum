import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Chart,
  ChartArea,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-react-charts';
import 'hammerjs';

const ChartContainer = () => {

  let data1 = [];
  let data2 = [];
  const numItem = 100;

  Array.from(Array(numItem).keys(), (value, index) => {
    data1.push({ x: index / 100, base: 0, y: 0, color: 'red'})
  });

  Array.from(Array(numItem).keys(), (value, index) => {
    data2.push({ x: index / 100, base: 0, y: 0, color: 'yellow' })
  });

  data1.map((value, index) => {
    if (index === numItem / 4) {
      data1[index - 3].y = 2 / 4;
      data1[index - 2].y = 2 / 3;
      data1[index - 1].y = 2;
      data1[index].y = 2;
      data1[index + 1].y = 2;
      data1[index + 2].y = 2 / 3;
      data1[index + 3].y = 2 / 4;
    }
  });

  data2.map((value, index) => {
    if (index === numItem / 2) {
      data2[index - 3].y = 2 / 4;
      data2[index - 2].y = 2 / 3;
      data2[index - 1].y = 2;
      data2[index].y = 2;
      data2[index + 1].y = 2;
      data2[index + 2].y = 2 / 3;
      data2[index + 3].y = 2 / 4;
    }
  });

  return (
    <Chart >
        <ChartSeries>
          <ChartSeriesItem
            type="rangeArea"
            data={data1}
            color={data1.color}
            categoryField="x"
            fromField="base"
            toField="y"
          />
          <ChartSeriesItem
            type="rangeArea"
            data={data2}
            color={data2.color}
            categoryField="x"
            fromField="base"
            toField="y"
          />
        </ChartSeries>
    </Chart>
  );
  
};

ReactDOM.render(<ChartContainer />, document.querySelector('my-app'));
