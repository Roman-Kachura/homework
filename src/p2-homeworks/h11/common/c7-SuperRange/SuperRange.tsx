import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import s from './SuperRange.module.css';
import style from './../HW11.module.css';
import {Slider} from "@material-ui/core";


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value?: number
    min?: number
    max?: number
    step?: number
    disable?: boolean
};

// const SuperRange: React.FC<SuperRangePropsType> = (
//     {
//         type,
//         onChange, onChangeRange,
//         className,
//
//         ...restProps//
//     }
// ) => {
//     let [value, setValue] = useState(restProps.value ? restProps.value : 0);
//     const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
//         onChange && onChange(e);
//
//         onChangeRange && onChangeRange(+e.currentTarget.value);
//
//         setValue(+e.currentTarget.value);
//     }
//
//
//     const finalRangeClassName = `${s.range} ${className ? className : ''}`;
//     return (
//         <>
//             <input
//                 type={'range'}
//                 onChange={onChangeCallback}
//                 className={finalRangeClassName}
//                 value={value}
//
//                 {...restProps}
//             />
//         </>
//     )
// }

{/*Alternative code*/
}

//Раз уж я подключил библиотеку, то решил использовать её и здесь!

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type,
        onChange, onChangeRange,
        className,
        min,
        max,
        step,
        disable,

        ...restProps//
    }
) => {
    let [value, setValue] = useState(restProps.value ? restProps.value : 0);

    const onChangeCallback = (e: React.ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange && onChangeRange(value as number);
        setValue(value as number);
    }


    return (
        <div className={style.superDoubleRange}>
            <span className={style.value}>{value}</span>
            <div className={style.slider}>
                <Slider
                    aria-label="Always visible"
                    step={step}
                    value={value}
                    valueLabelDisplay="auto"
                    onChange={onChangeCallback}
                    color='secondary'
                    min={min}
                    max={max}
                    disabled={disable}
                />
            </div>
        </div>
    )
}


export default SuperRange;
