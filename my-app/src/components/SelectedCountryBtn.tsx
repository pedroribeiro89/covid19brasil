import React from "react";
import {useDispatch} from "react-redux";
import {CountryListStyle} from "../styles";
import {Country} from "../models/Country";
import {removeCountry} from "../actions/countriesActions";


export interface SelectedCountryBtnProps {
    country: Country
}
const SelectedCountryBtn: React.FunctionComponent<SelectedCountryBtnProps> = (props) => {
    const dispatch = useDispatch();
    return (
        <div style={CountryListStyle.selectedCountry}>
            {props.country.name}
            <div style={CountryListStyle.selectedCountryBtn} onClick={() => dispatch(removeCountry(props.country))}>X</div>
        </div>
    );
};

export default SelectedCountryBtn;
