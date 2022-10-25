import axios from "axios";
import { API_KEY, cannot_get, set_load } from "../weatherActions/weatherActions";


export let GET_INPUT_INFO = 'GET_INPUT_INFO';

// GET INPUT INFO (COUNTRY OR CITY)
export let get_input_info = (data) => {
    return async dispatch => {
        try {
            dispatch(dispatch(set_load())); // while trying to get it sets loading
            let city = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API_KEY}&units=metric`);
            Object.entries(city.data).length > 0? dispatch({ type: GET_INPUT_INFO, payload: [city.data] })
            : dispatch(cannot_get());
        } catch (e) { dispatch(cannot_get()); }
    }
};