export type ButtonsType = 'inc' | 'reset' | 'set';

export type IInitialStateType={
    start: number
    end:number
    startError:boolean
    endError:boolean
    btn: ButtonsType
    count:number|null
}

const initialState: IInitialStateType={
    start: 0,
    end:0,
    startError: false,
    endError:false,
    count:null,
    btn:'inc'
}

type ICommonActionTypes={}

export const countReducer = (state:IInitialStateType=initialState, action:ICommonActionTypes) => {
    switch (action) {
        default:
            return state
    }
}