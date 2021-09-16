import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import style from './../h4/common/c1-SuperInputText/SuperInputText.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (value: string) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const onKeyPressCallBack = (e:KeyboardEvent<HTMLInputElement>)=> {
        if(e.key === 'Enter') addUser();
    }

    return (
        <div className={s.someClass}>
            <SuperInputText
                placeholder={'Enter name'}
                value={name}
                onChange={(e) => setNameCallback(e.currentTarget.value.trim())}
                onBlur={(e) => setNameCallback(e.currentTarget.value.trim())}
                onKeyPress={onKeyPressCallBack}
                error={error}
                superInputBlockClassName={s.inputBlock}
            />
            <button disabled={!name} className={s.button} onClick={addUser}>ADD NAME</button>
            <span className={s.totalUsers}>Total Users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
