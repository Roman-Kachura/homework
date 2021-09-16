import React from 'react';
import s from './Message.module.css';

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <div className={s.messageImageBlock}>
                <img src={props.avatar} alt=''/>
            </div>
            <div className={s.messageContent}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
