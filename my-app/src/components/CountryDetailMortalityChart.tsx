import React from "react";
import {Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {CountryDetailChartProps} from "./CountryDashboard";
import {Colors} from "../styles";

const CountryDetailMortalityChart: React.FunctionComponent<CountryDetailChartProps> = (props) => {
    const chartData = props.chartData;
    if (chartData) {
        return (
            <LineChart width={1200} height={300} data={chartData.mortalityChartData} style={{ margin: "0 auto" } }>
                <Line dataKey={'value'}
                      stroke={Colors.accent}
                      type="linear"
                      dot={true}
                      strokeWidth={4}/>
                <XAxis dataKey="date" stroke="white"/>
                <YAxis unit="%" stroke="white"/>
                <Legend />
                <Tooltip />
            </LineChart>
        );
    } else {
        return (<>Carregando...</>);
    }
};

export default CountryDetailMortalityChart;
