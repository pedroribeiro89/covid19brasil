import {Country} from "../models/Country";
import {
    CountryListActionTypes,
    CREATE_COUNTRY_LIST,
    REMOVE_COUNTRY,
    SELECT_COUNTRY,
    SELECT_STATUS
} from "./countriesTypes";
import {Status} from "../models/Status";


export function CreateCountryList(countryList: Country[]): CountryListActionTypes {
    return {
        type: CREATE_COUNTRY_LIST,
        payload: countryList
    }
}

export function selectCountry(country: Country): CountryListActionTypes {
    return {
        type: SELECT_COUNTRY,
        payload: country
    }
}

export function removeCountry(country: Country): CountryListActionTypes {
    return {
        type: REMOVE_COUNTRY,
        payload: country
    }
}

export function selectStatus(status: Status): CountryListActionTypes {
    return {
        type: SELECT_STATUS,
        payload: status
    }
}
