import { GET_COUNTRIES } from "../../actions/get/countries";
import { GET_CITY } from "../../actions/get/getCity";
import { GET_INPUT_INFO } from "../../actions/get/inputInfo";
import { ORDER_COUNTRIES } from "../../actions/order/order";
import { CANNOT_GET, EMPTY_ARR, SET_LOAD } from "../../actions/weatherActions/weatherActions";

let initial_state = {
    countries: [], countries_copie: [],
    city: {},
    loading: false
}

const weatherReducer = (state=initial_state, action) => {
    switch (action.type) {
        case GET_COUNTRIES: return {...state, countries: action.payload, countries_copie: action.payload, loading: false};
        case GET_INPUT_INFO: return {...state, countries_copie: action.payload, loading: false};
        case GET_CITY: return {...state, city: action.payload, loading: false};

        case ORDER_COUNTRIES: return {...state, countries_copie: action.payload};

        case CANNOT_GET: return {...state, countries_copie: [], loading: false};
        case EMPTY_ARR: return {...state, countries_copie: []};
        case SET_LOAD: return {...state, loading: true};

        default: return {...state};
    }
};
export default weatherReducer;