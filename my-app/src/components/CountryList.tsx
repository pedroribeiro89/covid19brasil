import React from 'react';
import {Country} from "../models/Country";
import {selectCountry} from "../actions/countriesActions";
import {useDispatch, useSelector} from "react-redux";
import {CountryListState} from "../actions/countriesTypes";
import {CountryListStyle} from "../styles";
import SelectedCountryBtn from "./SelectedCountryBtn";

const CountryList: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const state: CountryListState = useSelector((state: any) => state.countriesReducer);

    return (
        <div>
            <section style={CountryListStyle.section}>
                <h1>Selecione os países</h1>
                <div>
                    <ul style={CountryListStyle.list}>
                        {state.countryList.map(
                            (country: Country) =>
                                (<li style={CountryListStyle.item} key={country.slug} onClick={() => dispatch(selectCountry(country))}>{country.name}</li>)
                        )}
                    </ul>
                    <div style={CountryListStyle.selectedCountryContainer}>
                        {state.selectedCountries.map(
                            (country: Country) => (
                                <SelectedCountryBtn key={country.slug} country={country}>{country.name}</SelectedCountryBtn>
                            ))
                        }
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CountryList;

// https://covid19api.com/
//     https://api.covid19api.com/total/country/japan/status/deaths
// https://api.covid19api.com/total/country/japan/status/deaths





