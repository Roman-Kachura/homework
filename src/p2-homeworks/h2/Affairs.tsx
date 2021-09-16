import React from 'react'
import Affair from './Affair'
import {AffairsType, AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Affairs.module.css'


export type deleteAffairCallbackType = (_id: number) => void;

type AffairsPropsType = {
    data: AffairsType
    setFilter: (filter: FilterType) => void
    filter:FilterType
    deleteAffairCallback: deleteAffairCallbackType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all');
    }
    const setHigh = () => {
        props.setFilter('high');
    }
    const setMiddle = () => {
        props.setFilter('middle');
    }
    const setLow = () => {
        props.setFilter('low');
    }

    return (
        <div>

            {mappedAffairs}

            <div className={s.filterButtons}>
                <SuperButton className={props.filter === 'all' ? s.filterBtnActive : s.filterBtn} onClick={setAll}>All</SuperButton>
                <SuperButton className={props.filter === 'high' ? s.filterBtnActive : s.filterBtn} onClick={setHigh}>High</SuperButton>
                <SuperButton className={props.filter === 'middle' ? s.filterBtnActive : s.filterBtn} onClick={setMiddle}>Middle</SuperButton>
                <SuperButton className={props.filter === 'low' ? s.filterBtnActive : s.filterBtn} onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
