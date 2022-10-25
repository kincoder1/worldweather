import React from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../../redux/actions/get/countries";
import s from './Pagination.module.css';

function Pagination ({ pagination, current_page, page_cant }) {

    let dispatch = useDispatch();

    return (
        <div className={s.container}>
            <button className={s.btn} onClick={() => dispatch(getCountries())}>All</button>
            <button className={s.btn} onClick={() => pagination(current_page-1)}>prev</button>
            <div className={s.page_info}>{current_page}-{page_cant}</div>
            <button className={s.btn} onClick={() => pagination(current_page+1)}>next</button>
        </div>
    )
};
export default Pagination;