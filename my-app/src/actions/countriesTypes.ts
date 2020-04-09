import {Country} from "../models/Country";
import {Status} from "../models/Status";

export const CREATE_COUNTRY_LIST = "CREATE_COUNTRY_LIST";
export const SELECT_COUNTRY = "SELECT_COUNTRY";
export const REMOVE_COUNTRY = "REMOVE_COUNTRY";
export const SELECT_STATUS = "SELECT_STATUS";

export interface CountryListState {
    countryList: Country[],
    selectedCountries: Country[],
    status: Status
}

interface CreateCountryListAction {
    type: typeof CREATE_COUNTRY_LIST
    payload: Country[]
}

interface SelectCountryAction {
    type: typeof SELECT_COUNTRY
    payload: Country
}

interface RemoveCountryAction {
    type: typeof REMOVE_COUNTRY
    payload: Country
}

interface SelectStatusAction {
    type: typeof SELECT_STATUS
    payload: Status
}

export type CountryListActionTypes = SelectCountryAction | RemoveCountryAction | CreateCountryListAction | SelectStatusAction
