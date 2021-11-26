import React, {useState} from 'react'
import {Slider} from "@material-ui/core";
import style from './../HW11.module.css';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min?: number
    max?: number
    step?: number
    disable?: boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min,
        max,
        step,
        disable,
    }
) => {
    let [value1, setValue1] = useState(value ? value[0] : 0);
    let [value2, setValue2] = useState(value ? value[1] : 100);


    const onChange = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        if (typeof value === 'object') {
            if (onChangeRange) {
                onChangeRange([value[0], value[1]]);
            }

            setValue1(value[0]);
            setValue2(value[1]);
        }
    }
    return (
        <div className={style.superDoubleRange}>
            <span className={style.value}>{value1}</span>
            <div className={style.slider}>
                <Slider
                    aria-label="Always visible"
                    step={step}
                    value={value}
                    valueLabelDisplay="auto"
                    onChange={onChange}
                    min={min}
                    max={max}
                    disabled={disable}
                />
            </div>
            <span className={style.value}>{value2}</span>
        </div>
    )
}

export default SuperDoubleRange
