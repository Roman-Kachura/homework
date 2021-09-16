import React, {useState} from 'react';
import GreetingContainer from './GreetingContainer';
import s from './../../p1-main/m1-ui/u1-app/App.module.css';
import {v1} from "uuid";

export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        setUsers([...users, {name: name, _id: v1()}]);
    }

    return (
        <div className={s.container}>
            <h4>homeworks 3</h4>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3
