import {LoadingStateType} from "../HW10";

const initState = {
    loadingValue: false
}

type ActionsType = loadingACType | unLoadingACType;

export const loadingReducer = (state = initState, action: ActionsType): LoadingStateType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, loadingValue: true}
        }
        case 'UN-LOADING': {
            return {...state, loadingValue: false}
        }
        default:
            return state
    }
}


type loadingACType = {
    type: 'LOADING'
};
type unLoadingACType = {
    type: 'UN-LOADING'
};
export const loadingAC = (): loadingACType => ({type: 'LOADING'})
export const unLoadingAC = (): unLoadingACType => ({type: 'UN-LOADING'})
