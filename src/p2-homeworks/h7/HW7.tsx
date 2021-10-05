import React, {ChangeEvent, useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[1]);
    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption(e.currentTarget.value);
    }

    const onChangeRadio = (e:ChangeEvent<HTMLInputElement>) => {
        onChangeOption(e.currentTarget.value);
    }

    return (
        <div style={{padding:'0 20px'}}>
            <h3>homeworks 7</h3>
            <div>
                <SuperSelect
                    name={'select'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                    // onChange={onChangeSelect}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                    // onChange={onChangeRadio}
                />
            </div>
        </div>
    )
}

export default HW7
