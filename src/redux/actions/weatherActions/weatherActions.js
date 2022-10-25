
export const API_KEY = '8d1a0c6569b2f521faca2c03782172dd';

export let CANNOT_GET = 'CANNOT_GET';
export let EMPTY_ARR = 'EMPTY_ARR';
export let SET_LOAD = 'SET_LOAD';


export let set_load = () => { return {type: SET_LOAD} };
export let empty_arr = () => { return {type: EMPTY_ARR} };
export let cannot_get = ()  => { return {type: CANNOT_GET} }