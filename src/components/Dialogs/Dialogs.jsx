import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

function Messages(props) {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

function Dialogs(props) {
    let dialogsData = [
        {id: 0, name: 'Arkadiy'},
        {id: 1, name: 'Roman'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Dasha'},
        {id: 4, name: 'Sasha'}
    ]

    let dialogsElements = [
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>,
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
    ];

    let messagesData = [
        {id: 0, message: 'йо'},
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Шалом'},
        {id: 3, message: 'Вечер в хату'},
        {id: 4, message: 'Здравствуйте'}
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {/*<Messages message={messagesData[0].message} id={messagesData[0].id}/>*/}
                {/*<Messages message={messagesData[1].message} id={messagesData[1].id}/>*/}
                {/*<Messages message={messagesData[2].message} id={messagesData[2].id}/>*/}
                {/*<Messages message={messagesData[3].message} id={messagesData[3].id}/>*/}
                {/*<Messages message={messagesData[4].message} id={messagesData[4].id}/>*/}
            </div>
        </div>
    );
}

export default Dialogs