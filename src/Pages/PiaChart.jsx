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
          name:"Jewellery",
          y: 6,
          sliced: true
        },
        {
          name:'Electronics',
          y: 4,
          sliced: true
        },
        {
          name:"Men Cothes",
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

const App = () => {
  return (
    <div>
      <PieChart highcharts={Highcharts} options={options} />
    </div>
  );
};

export default App;
