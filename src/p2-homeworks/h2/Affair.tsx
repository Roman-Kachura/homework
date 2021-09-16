import React from 'react'
import {AffairType} from "./HW2";
import {deleteAffairCallbackType} from "./Affairs";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: deleteAffairCallbackType
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const classPriority = s.item + ' ' + s[props.affair.priority];

    return (
        <div
            className={classPriority}>
            <div className={s.name}><b>{props.affair.name} </b></div>
            <div className={s.priority}>[{props.affair.priority}] </div>
            <SuperButton red onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
