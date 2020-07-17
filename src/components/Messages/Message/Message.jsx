import React from "react";
import m from './../messages.module.scss';

const Message = props => <div className={m.dialog} key={props.id}>{props.message}</div>;
export default Message;
