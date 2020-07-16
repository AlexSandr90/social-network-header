import React from "react";
import m from './../messages.module.scss'
import {NavLink} from "react-router-dom";

const MessageItem = props => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={m.dialog}>
            <NavLink to={path} activeClassName={m.active}>{props.name}</NavLink>
        </div>
    )
};

export default MessageItem;
