import React from 'react';
import {selectStatus} from "../actions/countriesActions";
import {useDispatch, useSelector} from "react-redux";
import {CountryListState} from "../actions/countriesTypes";
import {Status} from "../models/Status";
import {StatusSelectStyle} from "../styles";

const StatusSelect: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const state: CountryListState = useSelector((state: any) => state.countriesReducer);

    const confirmedStyle = state.status === Status.CONFIRMED ? StatusSelectStyle.selected : StatusSelectStyle.option;
    const deathsStyle = state.status === Status.DEATHS ? StatusSelectStyle.selected : StatusSelectStyle.option;
    const recoveredStyle = state.status === Status.RECOVERD ? StatusSelectStyle.selected : StatusSelectStyle.option;
    return (
        <div style={StatusSelectStyle.container}>
            <div onClick={() => dispatch(selectStatus(Status.CONFIRMED))} style={confirmedStyle}>Confirmados</div>
            <div onClick={() => dispatch(selectStatus(Status.DEATHS))}  style={deathsStyle}>Mortes</div>
            <div onClick={() => dispatch(selectStatus(Status.RECOVERD))}  style={recoveredStyle}>Recuperados</div>
        </div>
    );
};

export default StatusSelect;

// https://covid19api.com/
//     https://api.covid19api.com/total/country/japan/status/deaths
// https://api.covid19api.com/total/country/japan/status/deaths
