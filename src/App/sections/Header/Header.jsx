import React from "react";
import s from './Header.module.css';

function Header () {
    return (
        <header className={s.header}><h1 className={s.header_txt}>world weather</h1></header>
    )
};
export default Header;