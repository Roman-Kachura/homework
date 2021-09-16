import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const setNameCallback = (value: string) => {
        setName(value);
        setError(value ? '' : 'Name is required');
    }
    const addUser = () => {
        if (name) {
            addUserCallback(name);
            alert(`Hello ${name}!`);
        } else {
            setError('Name is required');
        }
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
