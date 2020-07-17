import React from "react";
import m from './../messages.module.scss'
import {NavLink} from "react-router-dom";

const MessageItem = props => {
    const {id, name} = props;
    const {dialog, active} = m;
    let path = `/dialogs/${id}`;

    return (
        <div className={dialog}>
            <NavLink key={id} to={path} activeClassName={active}>{name}</NavLink>
        </div>
    )
};

export default MessageItem;
