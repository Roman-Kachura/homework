import {ThemesType} from "../HW12";

const initState = {
    theme: 'some' as ThemesType
};

export const themeReducer = (state = initState, action: ActionsType): {theme:ThemesType} => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

type ActionsType = ChangeThemeACType;
type ChangeThemeACType = ReturnType<typeof changeThemeAC>;
export const changeThemeAC = (theme: ThemesType) => {
    return {
        type: 'CHANGE-THEME',
        theme
    }
};