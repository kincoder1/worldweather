import React from "react";
import s from './NavOptions.module.css';

import FilterOptions from "../../components/FilterOptions/FilterOptions";
import InputSearch from "../../components/InputSearch/InputSearch";
import Pagination from "../../components/Pagination/Pagination";

function NavOptions ({ pagination, current_page, page_cant }) {
    
    return (
        <div className={s.container}>
            <InputSearch/>
            <Pagination pagination={pagination}
                current_page={current_page} page_cant={page_cant}
            />
        </div>
    )
};
export default NavOptions;