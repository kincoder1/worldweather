import React from "react";
import s from './WeatherCardErr.module.css';


function WeatherCardErr ({ name, icon }) {
    return (
        <div className={s.container}>

            <img className={s.img} src={icon} alt="" />
            <div className={s.txt}>{name}</div>

        </div>
    )
};
export default WeatherCardErr;