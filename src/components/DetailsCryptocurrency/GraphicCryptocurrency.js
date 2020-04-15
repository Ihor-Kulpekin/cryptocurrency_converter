import React, {useEffect} from 'react';
import Highcharts,{chart} from 'highcharts';

const GraphicCryptocurrency = ({historicalData,id}) => {
  const data = historicalData.map((item) => item.close);
  const dataTime = historicalData.map((item) => item.time);

  const options = {
    chart: {
      zoomType: 'x',
      panning: true,
      panKey: 'shift',
      scrollablePlotArea: {
        minWidth: 550
      },
      renderTo: 'chart',
    },
    title:{
      text:' Historical Price Chart '+id
    },
    yAxis: {
      labels: {
        function() {
          return this.value + '$';
        }
      },
      title:{
        text: 'Price'
      }
    },
    xAxis: {
      categories: dataTime,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },
    series: [{
      type: 'area',
      accessibility: {
        keyboardNavigation: {
          enabled: false
        }
      },
      data: data,
      lineColor: 'blue',
      color: 'rgba(45,194,255,0.53)',
      fillOpacity: 0.3,
      name:'Close',
      tooltip: {
        valueSuffix: ' $',
        animation:true
      },
    }]
  };

  const highChartsRender = () => {
    chart(options);
  };

  useEffect(highChartsRender);

  return (
    <div id='chart'/>
  )
};

export default GraphicCryptocurrency