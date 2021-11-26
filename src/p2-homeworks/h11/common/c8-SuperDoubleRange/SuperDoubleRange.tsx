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
    let [value1, setValue1] = useState(0);
    let [value2, setValue2] = useState(50);

    if(value){
        value1 = value[0];
        value2 = value[1];
    }


    const onChange = (event: React.ChangeEvent<{}>, val: number | number[]) => {
        if (typeof val === 'object') {
            if (onChangeRange) {
                onChangeRange([val[0], val[1]]);
            }

            setValue1(val[0]);
            setValue2(val[1]);
        }
    }
    return (
        <div className={style.superDoubleRange}>
            <span className={style.value}>{value1}</span>
            <div className={style.slider}>
                <Slider
                    aria-label="Always visible"
                    step={step}
                    value={value ? [value[0],value[1]] : [value1,value2]}
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
