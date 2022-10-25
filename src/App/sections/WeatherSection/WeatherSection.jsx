import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import s from './WeatherSection.module.css';
import NavOptions from '../../components/NavOptions/NavOptions';
import WeatherCards from '../../components/WeatherCards/WeatherCards';

function WeatherSection () {

    let arr = useSelector(state => state.weatherReducer.countries_copie);
    
    let [ current_page, set_current_page ] = useState(1);
    let [ elements_per_page, set_elements_per_page ] = useState(9);

    let page_cant = Math.ceil(arr.length / elements_per_page);
    let last_index = current_page * elements_per_page;
    let first_index = last_index - elements_per_page;
    let elements_to_render = arr.slice(first_index, last_index);

    let pagination = (page) => { if (page > 0 && page <= page_cant) set_current_page(page) };

    return (
        <section className={s.container}>
            <NavOptions pagination={pagination} current_page={current_page} page_cant={page_cant}/>
            <WeatherCards countries_to_render={elements_to_render}/>
        </section>
    )
};
export default WeatherSection;