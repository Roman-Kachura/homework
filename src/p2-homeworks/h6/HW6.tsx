import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './../../p1-main/m1-ui/u1-app/App.module.css'

function HW6() {
    let defaultValue = localStorage.getItem('editable-span-value');
    const [value, setValue] = useState<string>('');

    const save = () => {
        saveState<string>('editable-span-value', value);
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', value));

        console.log(defaultValue);
    }

    return (
        <div>
            <hr/>
            <div className={s.container}>
                <h3>homeworks 6</h3>

                <div>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                    />
                </div>
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>
        </div>
    )
}

export default HW6
