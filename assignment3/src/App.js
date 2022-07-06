import "./App.css";
import LineChartGraph from "./Chart";
import {
  barChartOptions,
  columnChartOptions,
  lineChartOptions,
} from "./options";
import { exportMultipleChartsToPdf } from "./utils";
import ChartHigh from "./ChartHigh";

function App() {
  return (
    <div className="App">
      <button className="button" onClick={exportMultipleChartsToPdf}>
        Export to PDF
      </button>
      <ChartHigh chartOptions={lineChartOptions} />
      <ChartHigh chartOptions={barChartOptions} />
      <ChartHigh chartOptions={columnChartOptions} />
      <div className="row">
        <ChartHigh chartOptions={lineChartOptions} />
        <ChartHigh chartOptions={columnChartOptions} />
      </div>
    </div>
  );
}

export default App;
