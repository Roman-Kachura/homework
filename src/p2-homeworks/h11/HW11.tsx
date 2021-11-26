import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from '../../p1-main/m1-ui/u1-app/App.module.css';

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeValue = (value: number) => {
        setValue1(value);
    }

    const onChangeDoubleValue = (value: [number, number]) => {
        setValue1(value[0]);
        setValue2(value[1]);
    }

    return (
        <div className={s.container}>
            <h3>homeworks 11</h3>
            <div>
                <SuperRange
                    onChangeRange={onChangeValue}
                    value={value1}
                />
            </div>

            <div>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeDoubleValue}
                />
            </div>
        </div>
    )
}

export default HW11
