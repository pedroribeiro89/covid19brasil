import { useState, useEffect } from 'react';
import {ChartData} from "../models/ChartData";
import {CountryData} from "../models/CountryData";
import {AxiosResponse} from "axios";
import {Covid19ApiService} from "../services/Covid19ApiService";
import {CountryListState} from "../actions/countriesTypes";

export function useCountryListChartData(state: CountryListState): ChartData | undefined {
    const [chartData, setChartData] = useState<ChartData | undefined>(undefined);

    const requestCountriesData = async () => {
        let countryDataList: CountryData[] = [];
        let response: AxiosResponse<CountryData>;
        for (const country of state.selectedCountries) {
            response = await Covid19ApiService.getCountryData(country.slug, state.status);
            countryDataList.push(response.data);
        }
        setChartData(new ChartData(countryDataList, state.status));
    };

    useEffect(() => { requestCountriesData(); }, [state]);

    return chartData;
}
