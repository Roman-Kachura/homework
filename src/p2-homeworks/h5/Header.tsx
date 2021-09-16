import React from 'react';
import {NavLink} from "react-router-dom";
import s from './HW5.module.css'

function Header() {
    return (
        <div className={s.linkBlock}>
            <div className={s.wrapper}>
                <NavLink to={'/pre-junior'} activeClassName={s.active}>Pre-junior</NavLink>
                <NavLink to={'junior'} activeClassName={s.active}>Junior</NavLink>
                <NavLink to={'/junior+'} activeClassName={s.active}>Junior+</NavLink>
            </div>
        </div>
    )
}

export default Header
