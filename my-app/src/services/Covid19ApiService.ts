import axios, {AxiosPromise, AxiosRequestConfig} from "axios";
import {Country} from "../models/Country";

export class Covid19ApiService {
    static _withCovid19api(path: string) { return `https://api.covid19api.com/${path}`; }

    static getCountries(): AxiosPromise<Country[]> {
        const options: AxiosRequestConfig = {
            method: 'get',
            url: Covid19ApiService._withCovid19api("countries"),
            transformResponse: [(data: string) => {
                // const countries = [];
                return JSON.parse(data).map((country: any) => new Country(country))
            }]
        };
        return axios(options);
    }
}
