import React from 'react';
import CountryList from "./CountryList";
import {Covid19ApiService} from "../services/Covid19ApiService";
import {Country} from "../models/Country";
import {AxiosResponse} from "axios";

function MainContent() {
    const [countries, setCountries] = React.useState<Country[]>([]);

    const requestCountries = async () => {
        const response: AxiosResponse<Country[]> = await Covid19ApiService.getCountries();
        console.log('response');
        console.log(response);
        setCountries(response.data);
    };

    React.useEffect(() => { requestCountries(); }, []);

    return (
        <>
            <div>
                info
            </div>

            <CountryList countries={countries}></CountryList>

            <div>grafico</div>
        </>
    );
}

export default MainContent;
