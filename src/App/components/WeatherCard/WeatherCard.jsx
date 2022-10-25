import React from "react";

import s from './WeatherCard.module.css';

function WeatherCard ({ name, max_temp, min_temp, description, icon }) {

    return (
        <div className={s.container}>

            <div className={s.container_box}>
                <div className={s.container_box_title}>{name}</div>
                <div className={s.container_box_txt}>{Math.round(max_temp+min_temp)/2}°C</div>
                <img className={s.container_box_img} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="s"/>
            </div>

            <div className={s.container_box}>
                <div className={s.container_box_txt}>Current:</div>
                <div className={s.container_box_txt}>{description}</div>
            </div>

            <div className={s.container_box}>
                <div className={s.container_box_txt}>Max temperature:</div>
                <div className={s.container_box_txt}>{Math.round(max_temp)}°C</div>
            </div>

            <div className={s.container_box}>
                <div className={s.container_box_txt}>Min temperature:</div>
                <div className={s.container_box_txt}>{Math.floor(min_temp)}°C</div>
            </div>

        </div>
    )
};
export default WeatherCard;