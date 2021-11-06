import React from "react";
import s from "./HW12.module.css";
import parentStyle from '../../p1-main/m1-ui/u1-app/App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeAC} from "./bll/themeReducer";


export type ThemesType = 'dark'| 'red'| 'some';
const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType,string>(state => state.style.theme);
    const dispatch = useDispatch();
    const onChangeOption = (value:ThemesType)=>{
        dispatch(changeThemeAC(value));
    }

    return (
        <div className={s[theme] + ' ' + parentStyle.container}>
            <h3 className={s[theme + '-text']}>
                homeworks 12
            </h3>

            <SuperSelect options={themes} onChangeOption={onChangeOption}/>
        </div>
    );
}

export default HW12;
