import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import './RatingChart.css';

const c2Data = [1200, 3000, 2000, 2780, 1890, 2390, 3490, 2974];
const c1Data = [0, 1398, 1560, 2750, 1167, 3750, 3300, 3126];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug'
];

export default function SimpleLineChart() {
  return (
    <div className="rating-chart">
        <h2 className="rating-heading">Rating Chart</h2>
    <LineChart
      width={700}
      height= {250}
      series={[
        { data: c1Data, label: 'Course 1' },
        { data: c2Data, label: 'Course 2' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
    </div>
  );
}