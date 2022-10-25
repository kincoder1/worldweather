import axios from "axios";
import { API_KEY, cannot_get } from "../weatherActions/weatherActions";



export let GET_CITY = 'GET_CITY';

export let getCity = (get_city) => {
    return async dispatch => {
        try {
            let city  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${get_city}&appid=${API_KEY}&units=metric`);
            console.log(city.data)
            Object.entries(city.data).length > 0? dispatch({type: GET_CITY, payload: city.data})
            : dispatch(console.log('a'));
        } catch (e) { dispatch(cannot_get()); }
    }
};