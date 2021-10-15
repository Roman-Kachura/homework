import React, {useState} from 'react';
import {checkAgeAC, homeWorkReducer, sortNameDownAC, sortNameUpAC} from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './HW8.module.css';

export type UserType = { _id: number, name: string, age: number };

export const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople);

    const finalPeople = people.map((p: UserType) => (
        <div className={s.people} key={p._id}>
            <span className={s.peopleName}>{p.name}</span> <span className={s.peopleAge}>{p.age}</span>
        </div>
    ))

    //Стартовые функции:

    // const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}));
    // const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}));
    // const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}));

    {/*
        Сделал через Action Create, также использую people вместо initialPeople
        чтобы сортировались имеющийся список людей,а не весь изначальный initialPeople
        Если нужно просмотреть и отсортировать весь список людей, то добавил функцию showAllPeople и соответствующую кнопку
    */
    }

    const sortUp = () => setPeople(homeWorkReducer(people, sortNameUpAC()));
    const sortDown = () => setPeople(homeWorkReducer(people, sortNameDownAC()));
    const checkAge = () => setPeople(homeWorkReducer(people, checkAgeAC(18)));
    const showAllPeople = () => setPeople(initialPeople);

    return (
        <div>
            <hr/>
            <div className={s.container}>

                <h3>homeworks 8</h3>
                <div className={s.peoplesBlock}>
                    {finalPeople}
                </div>

                <div className={s.btnBlock}>
                    <div><SuperButton className={s.button} onClick={sortUp}>Sort Up</SuperButton></div>
                    <div><SuperButton className={s.button} onClick={sortDown}>Sort Down</SuperButton></div>
                    <div><SuperButton className={s.button} onClick={checkAge}>Check 18</SuperButton></div>
                    <div><SuperButton red className={s.button} onClick={showAllPeople}>Show All People</SuperButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW8
