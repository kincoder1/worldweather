import axios from "axios";
import { API_KEY, cannot_get, set_load } from "../weatherActions/weatherActions";

let countries = [
    'argentina', 'italia', 'uruguay', 'brasil', 'mexico', 'united states', 'canada', 'greenland', 'spain',
    'china', 'japan', 'korea', 'new zealand', 'australia', 'france', 'ireland'
];



export let GET_COUNTRIES = 'GET_COUNTRIES';

// GET COUNTRIES
export let getCountries = () => {
    return async dispatch => {
        try {
            dispatch(set_load()); // while trying to get it sets loading
            // get all data at once
            let get_data = countries.map( (country) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric`) );
            let result = await Promise.all(get_data); // waits to fullfield every promise
            let countries_arr = result.map((item) => item.data); // get util data
            if (countries_arr.length > 0) dispatch({type: GET_COUNTRIES, payload: countries_arr})
            else dispatch(cannot_get());
        } catch (e) { dispatch(cannot_get()) }
    }
};