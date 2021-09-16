import React from 'react';
import Message from "./Message";
import s from './../../p1-main/m1-ui/u1-app/App.module.css';

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'Some text',
    time: '22:00',
}

function HW1() {
    return (
        <div className={s.container}>
            <h4>homeworks 1</h4>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1
