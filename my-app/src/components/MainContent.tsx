import React from 'react';
import CountryList from "./CountryList";
import {useSelector} from "react-redux";
import CountryLineChart from "./CountryLineChart";
import {CountryListState} from "../actions/countriesTypes";
import StatusSelect from "./StatusSelect";
import CountryDetailList from "./CountryDetailList";
import {useCountryList} from "../hooks/useCountryList";
import Info from "./Info";

function MainContent() {
    const state: CountryListState = useSelector((state: any) => { return state.countriesReducer });
    useCountryList();
    return (
        <>
            <Info></Info>
            <CountryList></CountryList>
            <StatusSelect></StatusSelect>
            <CountryLineChart state={state}></CountryLineChart>
            <CountryDetailList></CountryDetailList>
        </>
    );
}

export default MainContent;
