import React, {useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {RequestApi} from "./api/request-api";

export const Request = () => {
    let [success, setSuccess] = useState(false);
    let [errorText,setErrorText] = useState('');
    let [info,setInfo] = useState('');

    const onChangeChecked = (checked: boolean) => {
        setSuccess(checked);
    }

    const sendARequest = () => {
        setErrorText('');
        setInfo('');
        console.log(RequestApi.createRequest(success)
            .then(res => {
                setErrorText(res.data.errorText);
                setInfo(res.data.info);
            })
            .catch(err => {
                setErrorText(err.response ? err.response.data.errorText : err.message)
            })
        )
    }
    return (
        <div>
            <SuperCheckbox onChangeChecked={onChangeChecked}>
                Select Success
            </SuperCheckbox>
            <SuperButton onClick={sendARequest}>
                send
            </SuperButton>
            <div>
                <div>{errorText ? errorText : ''}</div>
                <div>{info ? info : ''}</div>
            </div>
        </div>
    )
}