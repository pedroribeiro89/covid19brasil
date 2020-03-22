import React from 'react';
import {Country} from "../models/Country";

type CountryListProps = {
    countries: Country[]
};

const CountryList: React.FunctionComponent<CountryListProps> = (props) => {
    console.log('props');
    console.log(props);
    return (
        <div>
            <div>
                Lista paises
                <ul>
                    {props.countries.map((country: Country) => (<li>{country.name}</li>))}
                </ul>
            </div>
            <div>Lista paises selecionados</div>
        </div>
    );
}

export default CountryList;

