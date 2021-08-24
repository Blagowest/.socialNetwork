import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={style.Navbar}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active}>profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}>dialogs</NavLink>
            </div>
            <div>
                <ak>content</ak>
            </div>
        </nav>
    );
}

export default Navbar;
