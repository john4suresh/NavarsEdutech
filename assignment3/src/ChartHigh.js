import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export default function ChartHigh({ chartOptions, chartValue }) {
  return (
    <div className={chartValue ? "custom-chart selected" : "custom-chart"}>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        containerProps={{ style: { height: "100%" } }}
      />
      <div>
        <p>This is the Description of the Chart</p>
        <p>This is the Description of the Chart</p>
        <p>This is the Description of the Chart</p>
      </div>
    </div>
  );
}
