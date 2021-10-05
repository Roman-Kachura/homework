import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './SuperRadio.module.css';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    onChange?:(e:ChangeEvent<HTMLInputElement>) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if(onChangeOption) onChangeOption(e.currentTarget.value);
        if(onChange) onChange(e);
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label className={s.labelForSuperRadio} key={name + '-' + i}>
            <input
                className={s.superRadio}
                type={'radio'}
                name={name}
                value={o}
                onChange={onChangeCallback}
                checked={value === o}
            />
            <span className={s.customSuperRadio}/>
           {o}
        </label>
    )) : []

    return (
        <div>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
