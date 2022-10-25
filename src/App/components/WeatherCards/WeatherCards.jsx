import React from "react";
import { useSelector } from "react-redux";

import s from './WeatherCards.module.css';
import img from '../../../img/err_load.png';
import LoadCard from "../../components/LoadCard/LoadCard";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import WeatherCardErr from "../../components/WeatherCardErr/WeatherCardErr";

function WeatherCards ({ countries_to_render }) {
    
    let countries = useSelector(state => state.weatherReducer.countries_copie);
    let loading = useSelector(state => state.weatherReducer.loading);

    return (
       <div>
            {
                loading? <LoadCard/>
                : <div className={countries_to_render.length <= 1? s.sm_container : s.container}>
                    {
                        countries.length === 0? <WeatherCardErr name='cannot get countries / city' icon={img}/>
                        : countries_to_render.map(
                            (item, index) => <WeatherCard key={index}
                                name={item.name} max_temp={item.main.temp_max} min_temp={item.main.temp_min}
                                description={item.weather[0].description} icon={item.weather[0].icon}
                            />
                        )
                    }
                </div>
            }
       </div>
    )
};
export default WeatherCards;