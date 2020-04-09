import {Country} from "../models/Country";
import {
    CountryListActionTypes,
    CountryListState,
    CREATE_COUNTRY_LIST,
    REMOVE_COUNTRY,
    SELECT_COUNTRY,
    SELECT_STATUS
} from "../actions/countriesTypes";
import {Status} from "../models/Status";

const initialState: CountryListState = {
    countryList: [],
    selectedCountries: [],
    status: Status.DEATHS
};

export function countriesReducer(state = initialState, action: CountryListActionTypes): CountryListState  {
    let removeCountry = (country: Country, list: Country[]) => {
        return list.filter((c: Country) => c.name !== country.name)
    };
    let addCountry = (country: Country, list: Country[]) => {
        return list.concat(country).sort((a: Country, b: Country) => {
            if (a.name < b.name) { return -1; }
            if (b.name > a.name) { return 1; }
            return 0;

        });
    };

    switch (action.type) {
        case CREATE_COUNTRY_LIST:
            action.payload = action.payload.filter(country => country.slug !== '');
            action.payload.sort((a: Country, b: Country) => {
                if (a.name < b.name) { return -1; }
                if (b.name > a.name) { return 1; }
                return 0;
            });
            return {
                countryList: action.payload,
                selectedCountries: [],
                status: state.status
            };
        case SELECT_COUNTRY:
            return {
                countryList: removeCountry(action.payload, state.countryList),
                selectedCountries: addCountry(action.payload, state.selectedCountries),
                status: state.status
            };
        case REMOVE_COUNTRY:
            return {
                countryList: addCountry(action.payload, state.countryList),
                selectedCountries: removeCountry(action.payload, state.selectedCountries),
                status: state.status
            };
        case SELECT_STATUS:
            return {
                countryList: state.countryList,
                selectedCountries: state.selectedCountries,
                status: action.payload
            };
        default:
            return state
    }
}
