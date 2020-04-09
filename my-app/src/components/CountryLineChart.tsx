import React from "react";
import {Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {CountryListState} from "../actions/countriesTypes";
import {ChartCountry} from "../models/ChartData";
import {useCountryListChartData} from "../hooks/useCountryListChartData";

export interface CountryLineChartProps {
    state: CountryListState
}

const CountryLineChart: React.FunctionComponent<CountryLineChartProps> = (props) => {
    const chartData = useCountryListChartData(props.state);
    if (chartData && chartData.chartData.length > 0) {
        return (
            <div style={{ width: '100%', display: 'flex' } }>
                <LineChart width={1000} height={500} data={chartData.chartData} style={{margin: 'auto', color: 'white'}}>
                    {chartData.countryList.map(
                        (country: ChartCountry) => (
                            <Line key={country.name}
                                  type="linear"
                                  dataKey={country.name}
                                  stroke={country.color}
                                  dot={true}
                                  strokeWidth={4}/>
                        )
                    )}
                    <XAxis dataKey="date" stroke="white"/>
                    <YAxis stroke="white"/>
                    <Legend />
                    <Tooltip />
                </LineChart>
            </div>
        );
    } else {
        return (<div style={{ width: '100%', display: 'flex' } }>Carregando...</div>);
    }
};

export default CountryLineChart;
