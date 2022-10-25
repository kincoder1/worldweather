import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCountries } from '../redux/actions/get/countries'
import { getCity } from '../redux/actions/get/getCity';

import './App.css';
import Header from './sections/Header/Header';
import WeatherSection from './sections/WeatherSection/WeatherSection';


function App () {

    let dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(getCountries());
            dispatch(getCity('buenos aires'));
        }, [dispatch]
    );

    return (
        <div className='app'>
            <Header/>
            <WeatherSection/>
        </div>
    );
}

export default App;
