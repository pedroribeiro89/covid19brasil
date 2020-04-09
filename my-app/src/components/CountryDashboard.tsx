import React, {useEffect, useState} from "react";
import {RouteComponentProps} from "react-router-dom";
import TitleHeader from "./TitleHeader";
import CountryDetailChart from "./CountryDetailChart";
import {CountryDashboardStyle} from "../styles";
import {ChartCountryDetailData} from "../models/ChartCountryDetailData";
import {Covid19ApiService} from "../services/Covid19ApiService";
import {Status} from "../models/Status";
import CountryDetailMortalityChart from "./CountryDetailMortalityChart";

interface RouteCountrySlug { name: string; }
interface CountryDashboardProps extends RouteComponentProps<RouteCountrySlug> {}
export interface CountryDetailChartProps {
    chartData: ChartCountryDetailData | undefined
}

const CountryDashboard: React.FunctionComponent<CountryDashboardProps> = (props) => {

    const [chartData, setChartData] = useState<ChartCountryDetailData | undefined>(undefined);
    const requestCountryData = async () => {
        let responseConfirmed = await Covid19ApiService.getCountryData(props.match.params.name, Status.CONFIRMED);
        let responseDeaths = await Covid19ApiService.getCountryData(props.match.params.name, Status.DEATHS);
        let responseRecovered = await Covid19ApiService.getCountryData(props.match.params.name, Status.RECOVERD);

        setChartData(new ChartCountryDetailData(responseConfirmed.data, responseDeaths.data, responseRecovered.data));
    };

    useEffect(() => { requestCountryData(); }, [props]);

    return (
        <>
            <TitleHeader></TitleHeader>
            <article style={CountryDashboardStyle.container}>
                <h1> Dashboard {props.match.params.name} </h1>
                {/*<CountryDetailChart country_slug={props.match.params.name}></CountryDetailChart>*/}
                <CountryDetailChart chartData={chartData}></CountryDetailChart>

                <section>
                    <h1 style={CountryDashboardStyle.title}> Mortalidade </h1>
                    <p style={CountryDashboardStyle.text}>
                        A mortalidade é calculada dividido mortes por casos. Normalmente o covid-19 mata aproximadamente de 4% a 5% então
                        se o país apresenta um crescimento da mortalidade acima desses valores significa que pode ser uma sobrecarga do sistema de saúde
                        ou mais provavelmente uma subnotificação de casos por falta de testes.
                    </p>
                    <CountryDetailMortalityChart chartData={chartData}></CountryDetailMortalityChart>
                </section>
            </article>
        </>
    );
};

export default CountryDashboard;
