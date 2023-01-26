import React from "react";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";

const options = {
  chart: {
    type: "pie"
  },
  title: {
    text: ""
  },
  credits: {
    enabled: false
  },
  legend:{
    enabled:true
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true
      },
      showInLegend: false
    }
  },
  series: [
    {
      name: "",
      color: "#006600",
      lineWidth: 1,
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 3,
        states: {
          hover: {
            enabled: true,
            lineWidth: 1
          }
        }
      },
      data: [
        {
          name:"jewellery",
          y: 6,
          sliced: true
        },
        {
          name:'electronics',
          y: 4,
          sliced: true
        },
        {
          name:"men cothes",
          y: 8,
          sliced: true
        },
        {
          name:"Women clothes",
          y: 2,
          sliced: true
        }
      ]
    }
  ]
};

const PaiChart = () => {
  return (
    <div>
      <PieChart highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PaiChart;
