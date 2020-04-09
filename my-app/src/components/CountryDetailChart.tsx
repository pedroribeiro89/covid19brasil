import React from "react";
import {Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {CountryDetailChartProps} from "./CountryDashboard";

const CountryDetailChart: React.FunctionComponent<CountryDetailChartProps> = (props) => {
    const chartData = props.chartData;
    if (chartData) {
        return (
            <LineChart width={1200} height={300} data={chartData.chartData} style={{ margin: "0 auto" } }>
                <Line dataKey={chartData.confirmed.status}
                      stroke={chartData.confirmed.color}
                      type="linear"
                      dot={true}
                      strokeWidth={4}/>
                <Line dataKey={chartData.deaths.status}
                      stroke={chartData.deaths.color}
                      type="linear"
                      dot={true}
                      strokeWidth={4} />
                <Line dataKey={chartData.recovered.status}
                      stroke={chartData.recovered.color}
                      type="linear"
                      dot={true}
                      strokeWidth={4} />
                <XAxis dataKey="date" stroke="white"/>
                <YAxis stroke="white"/>
                <Legend />
                <Tooltip />
            </LineChart>
        );
    } else {
        return (<>Carregando...</>);
    }
};

export default CountryDetailChart;
