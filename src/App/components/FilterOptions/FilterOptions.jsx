import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { order_arr } from "../../../redux/actions/order/order";
import s from './FilterOptions.module.css';

function FilterOptions () {

    let dispatch = useDispatch();
    let arr = useSelector(state => state.weatherReducer.countries_copie);

    let [select, set_select] = useState({ continent: '', alpha: 'ALPHABETICALLY', all: 'ALL' });

    let order = (event) => {
        let { name, value } = event.target;
        set_select({...select, [name]: value});
        dispatch(order_arr(arr, value));
    };

    return (
        <div className={s.container}>

            <button className={`${s.select} ${s.select_left}`} name='all' value='ALL' onClick={order}>All</button>

            <select className={`${s.select} ${s.select_right}`} name='alpha' value={select.alpha} onChange={order}>
                <option value="ALPHABETICALLY">Alphabetically</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>

        </div>
    )
};
export default FilterOptions;