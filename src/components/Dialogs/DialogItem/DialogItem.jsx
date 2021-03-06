import React from "react";
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;