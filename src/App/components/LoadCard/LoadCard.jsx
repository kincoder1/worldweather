import React from "react";
import s from './LoadCard.module.css';
import img from '../../../img/loading.gif';

function LoadCard () {
    return (
        <div className={s.container}>
            <div className={s.img}></div>
        </div>
    )
};
export default LoadCard;