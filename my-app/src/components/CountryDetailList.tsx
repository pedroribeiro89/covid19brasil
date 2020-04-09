import {useSelector} from "react-redux";
import {CountryListState} from "../actions/countriesTypes";
import {Country} from "../models/Country";
import React from "react";
import {Link} from "react-router-dom";
import {CountryDetailListStyle} from "../styles";

const CountryDetailList: React.FunctionComponent = () => {

    const state: CountryListState = useSelector((state: any) => state.countriesReducer);

    const list = [...state.selectedCountries, ...state.countryList];

    list.sort((a: Country, b: Country) => {
        if (a.name < b.name) { return -1; }
        if (b.name > a.name) { return 1; }
        return 0;
    });

    return (
        <section style={CountryDetailListStyle.container}>
            <h1>Clique no país para ver o dashboard detalhado</h1>
            <ul style={CountryDetailListStyle.list}>
                {list.map((country: Country) => (
                    <Link style={CountryDetailListStyle.link} key={country.slug} to={'/'+country.slug}>
                        <li key={country.slug}>{country.name}</li>
                    </Link>
                ))}
            </ul>
        </section>
    );
};


export default CountryDetailList;
