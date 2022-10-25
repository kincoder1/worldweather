import { applyMiddleware, combineReducers, createStore } from "redux";
import weatherReducer from "./reducers/weatherReducer/weatherReducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({ weatherReducer });
const store = createStore(reducers, applyMiddleware(thunk));
export default store;