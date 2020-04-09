import axios, {AxiosPromise, AxiosRequestConfig} from "axios";
import {Country} from "../models/Country";
import {CountryData} from "../models/CountryData";

export class Covid19ApiService {
    static _withCovid19api(path: string) { return `https://api.covid19api.com/${path}`; }

    static getCountries(): AxiosPromise<Country[]> {
        const options: AxiosRequestConfig = {
            method: 'get',
            url: Covid19ApiService._withCovid19api("countries"),
            transformResponse: [(data: string) => {
                return JSON.parse(data).map((country: any) => new Country(country))
            }]
        };
        return axios(options);
    }

    static getCountryData(slug: string, status: string): AxiosPromise<CountryData> {
        const options: AxiosRequestConfig = {
            method: 'get',
            url: Covid19ApiService._withCovid19api(`total/country/${slug}/status/${status}`),
            transformResponse: [(data: string) => {
                return new CountryData(slug, JSON.parse(data))
            }]
        };
        return axios(options);
    }
}
