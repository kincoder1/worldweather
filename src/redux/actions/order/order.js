import { getCountries } from "../get/countries";
import { empty_arr } from "../weatherActions/weatherActions";

export let ORDER_COUNTRIES = 'ORDER_COUNTRIES';

export let order_arr = (arr, condition) => {
    return dispatch => {
        if (condition === 'ALL') dispatch(getCountries())
        else {
            let new_arr = arr;
            switch (condition) {
                case 'A-Z': new_arr = arr.sort((a,b) => a.name.toUpperCase() > b.name.toUpperCase()? 1: -1); break;
                case 'Z-A': new_arr = arr.sort((a,b) => b.name.toUpperCase() > a.name.toUpperCase()? 1: -1); break;
                default: new_arr = arr;
            }
            dispatch(empty_arr());
            dispatch({type: ORDER_COUNTRIES, payload: new_arr});
        }
    }
};