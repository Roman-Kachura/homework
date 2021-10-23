import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from '../../p1-main/m1-ui/u1-app/App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, unLoadingAC} from "./bll/loadingReducer";
import {Eclipse} from "./Eclipse";

export type LoadingStateType = {
    loadingValue: boolean
}

function HW10() {
    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loadingValue);
    const setLoading = () => {
        dispatch(loadingAC());
        setTimeout(() => dispatch(unLoadingAC()), 2000)
    };

    return (
        <div className={s.container}>
            <h3>homeworks 10</h3>

            {loading
                ? (
                    <Eclipse/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10
