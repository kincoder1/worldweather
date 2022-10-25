import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { get_input_info } from "../../../redux/actions/get/inputInfo";
import s from './InputSearch.module.css';

function InputSearch () {

    let dispatch = useDispatch();
    let [ input, set_input ] = useState('');

    let search_input = () => {
        dispatch(get_input_info(input));
        setTimeout(() => set_input(''), 2000);
    };

    return <div className={s.container}>
        <input className={s.input} type="text" value={input} onChange={(event) => set_input(event.target.value)}/>
        <button className={s.btn} onClick={search_input}>+</button>
    </div>

};
export default InputSearch;