import React from "react";
import m from './messages.module.scss';
import MessageItem from "./MessageItem/MessageItem";
import state from "../../localData/state";
import Message from "./Message/Message";


const dialogsElements = state.dialogsData.dialogs.map(item => <MessageItem name={item.name} id={item.id} />);
const messagesElements = state.dialogsData.messages.map(item => <Message message={item.message} id={item.id} />);

const Messages = () => {
    const {
        dialogs,
        messages,
        messageItems
    } = m;

    return (
        <article className={dialogs}>
            <div className={messageItems}>
                {dialogsElements}
            </div>
            <div className={messages}>
                {messagesElements}
            </div>
        </article>
    )
};

export default Messages;
