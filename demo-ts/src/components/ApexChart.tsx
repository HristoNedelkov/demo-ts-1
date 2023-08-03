import { Component } from "react";
import ReactApexChart from "react-apexcharts"; // Assuming you're using this package

interface State {
  series: number[];
  options: {
    chart: {
      type: "donut";
      width?: number;
    };
  };
}
interface ApexChartProps {
  series: number[];
}

class ApexChart extends Component<ApexChartProps, State> {
  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: props.series,
      options: {
        chart: {
          type: "donut",
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={"300px"}
        />
      </div>
    );
  }
}

export default ApexChart;
