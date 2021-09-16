import React, {useState} from 'react';
import Affairs from './Affairs';
import s from './../../p1-main/m1-ui/u1-app/App.module.css';

export type AffairPriorityType = 'low' | 'middle' | 'high';
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
};
export type FilterType = 'all' | AffairPriorityType;
export type AffairsType = Array<AffairType>;

const defaultAffairs: AffairsType = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'Anime', priority: 'low'},
    {_id: 3, name: 'Games', priority: 'low'},
    {_id: 4, name: 'Work', priority: 'high'},
    {_id: 5, name: 'HTML & CSS', priority: 'middle'},
    {_id: 6, name: 'Redux', priority: 'high'},
    {_id: 7, name: 'GIT', priority: 'middle'},
]

export const filterAffairs = (affairs: AffairsType, filter: FilterType): AffairsType => {
    if(filter === 'all') return affairs;
    else return affairs.filter(a => a.priority === filter);
}
export const deleteAffair = (affairs: AffairsType, _id: number): AffairsType => {
    return affairs.filter(a => a._id !== _id);
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairsType>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div className={s.container}>
            <h4>homeworks 2</h4>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                filter={filter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    )
}

export default HW2
