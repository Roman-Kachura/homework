import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            let sortState = [...state.sort((a: UserType, b: UserType) => a.name > b.name ? -1 : 1)];

            if (action.payload === 'up') {
                return sortState;
            }

            if (action.payload === 'down') {
                return sortState.reverse();
            }
        }
        case 'check': {
            return state.filter(f => f.age >= action.payload);
        }
        default:
            return state
    }
}

type ActionType = sortNameUpACType | sortNameDownACType | checkAgeACType;

export type sortNameUpACType = ReturnType<typeof sortNameUpAC>;
export const sortNameUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const;
};

export type sortNameDownACType = ReturnType<typeof sortNameDownAC>;
export const sortNameDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
};

export type checkAgeACType = ReturnType<typeof checkAgeAC>;
export const checkAgeAC = (age: number) => {
    return {
        type: 'check',
        payload: age
    } as const;
}