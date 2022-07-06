import "./App.css";
import {
  barChartOptions,
  columnChartOptions,
  lineChartOptions,
} from "./options";
import { exportMultipleChartsToPdf } from "./utils";
import ChartHigh from "./ChartHigh";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState({
    chart1: false,
    chart2: false,
    chart3: false,
    chart4: false,
    chart5: false,
  });

  const handleChange = (chart) => {
    setChecked((prevState) => ({ ...prevState, [chart]: !prevState[chart] }));
  };

  return (
    <div className="App">
      <button className="button" onClick={exportMultipleChartsToPdf}>
        Export to PDF
      </button>
      <div className="flex">
        <div className="px-4">
          <input
            type="checkbox"
            id="topping"
            name="chart1"
            value="Chart 1"
            checked={checked.chart1}
            onChange={() => handleChange("chart1")}
          />{" "}
          Chart 1
        </div>
        <div className="px-4">
          <input
            type="checkbox"
            id="topping"
            name="chart2"
            value="Chart 1"
            checked={checked.chart2}
            onChange={() => handleChange("chart2")}
          />{" "}
          Chart 2
        </div>
        <div className="px-4">
          <input
            type="checkbox"
            id="topping"
            name="chart3"
            value="Chart 1"
            checked={checked.chart3}
            onChange={() => handleChange("chart3")}
          />{" "}
          Chart 3
        </div>
        <div className="px-4">
          <input
            type="checkbox"
            id="topping"
            name="chart4"
            value="Chart 1"
            checked={checked.chart4}
            onChange={() => handleChange("chart4")}
          />{" "}
          Chart 4
        </div>
        <div className="px-4">
          <input
            type="checkbox"
            id="topping"
            name="chart5"
            value="Chart 1"
            checked={checked.chart5}
            onChange={() => handleChange("chart5")}
          />{" "}
          Chart 5
        </div>
      </div>
      <ChartHigh
        chartOptions={{
          ...lineChartOptions,
          title: {
            text: "Chart 1",
          },
        }}
        chartValue={checked.chart1}
      />
      <ChartHigh
        chartOptions={{
          ...barChartOptions,
          title: {
            text: "Chart 2",
          },
        }}
        chartValue={checked.chart2}
        label="Chart 2"
      />
      <ChartHigh
        chartOptions={{
          ...columnChartOptions,
          title: {
            text: "Chart 3",
          },
        }}
        chartValue={checked.chart3}
      />
      <div className="row">
        <ChartHigh
          chartOptions={{
            ...lineChartOptions,
            title: {
              text: "Chart 4",
            },
          }}
          chartValue={checked.chart4}
        />
        <ChartHigh
          chartOptions={{
            ...columnChartOptions,
            title: {
              text: "Chart 5",
            },
          }}
          chartValue={checked.chart5}
        />
      </div>
    </div>
  );
}

export default App;
