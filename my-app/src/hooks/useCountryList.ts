import {useEffect} from "react";
import {AxiosResponse} from "axios";
import {Country} from "../models/Country";
import {Covid19ApiService} from "../services/Covid19ApiService";
import {CreateCountryList, selectCountry} from "../actions/countriesActions";
import {useDispatch} from "react-redux";

export function useCountryList() {
    const dispatch = useDispatch();
    const requestCountries = async () => {
        const response: AxiosResponse<Country[]> = await Covid19ApiService.getCountries();
        dispatch(CreateCountryList(response.data));
        let brazil = response.data.find(country => country.slug === 'brazil');
        if (brazil) { dispatch(selectCountry(brazil)); }
    };

    useEffect(() => { requestCountries(); }, []);

}
