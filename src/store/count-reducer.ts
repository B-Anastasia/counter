export type ButtonsType = 'inc' | 'reset' | 'set';

const SET_START_VALUE = 'SET_START_VALUE'
const SET_END_VALUE = 'SET_END_VALUE'
const SET_ERROR='SET_ERROR'
const SET_COUNT='SET_COUNT'
const CHANGE_VALUE_WITHOUT_ERROR='CHANGE_VALUE_WITHOUT_ERROR'
const CHANGE_VALUE_WITH_ERROR='CHANGE_VALUE_WITH_ERROR'
const CHANGE_BTN='CHANGE_BTN'

export type IInitialStateType = {
    start: number
    end: number
    startError: boolean
    endError: boolean
    btn: ButtonsType
    count: number | null
    error: string
}

const initialState: IInitialStateType = {
    start: 0,
    end: 0,
    startError: false,
    endError: false,
    count: null,
    btn: 'set',
    error: '',
}

type IStartValueAT = {
    type: typeof SET_START_VALUE
    startValue: number
}
type IEndValueAT = {
    type: typeof SET_END_VALUE
    endValue: number
}
type ICountAT = {
    type: typeof SET_COUNT
    start:number|null
}
type IErrorAT = {
    type: typeof SET_ERROR
    errorText: string
}

type IChangedValueWithErrorAT = {
    type: typeof CHANGE_VALUE_WITH_ERROR,
    error:string
}
type IChangedValueWithoutErrorAT = {
    type: typeof CHANGE_VALUE_WITHOUT_ERROR
}
type IChangeBtnAT = {
    type: typeof CHANGE_BTN
    btn:ButtonsType
}

type ICommonActionTypes = IEndValueAT     | IStartValueAT|IErrorAT| IChangedValueWithErrorAT |IChangedValueWithoutErrorAT |ICountAT |IChangeBtnAT

export const countReducer = (state: IInitialStateType = initialState, action: ICommonActionTypes) => {
    switch (action.type) {
        case "SET_START_VALUE":
            return {
                ...state,
                start:action.startValue
            }
        case "SET_END_VALUE":
            return {
                ...state,
                end:action.endValue
            }
        case SET_ERROR:
            return {
                ...state,
                error:action.errorText
            }
        case "SET_COUNT":
            return {
                ...state,
                count: action.start
            }
        case "CHANGE_VALUE_WITH_ERROR":
            return {
                ...state,
                error: action.error,
                startError:true,
                endError:true
            }
        case "CHANGE_VALUE_WITHOUT_ERROR":
            return {
                ...state,
                error:'',
                startError:false,
                endError:false,
            }
        case "CHANGE_BTN":
            return {
                ...state,
                btn:action.btn
            }
        default:
            return state
    }
}

export const setStartValue = (startValue: number): IStartValueAT => ({type: SET_START_VALUE, startValue})
export const setEndValue = (endValue: number): IEndValueAT => ({type: SET_END_VALUE, endValue})
export const changeValueWithError = (error:string): IChangedValueWithErrorAT => ({type: CHANGE_VALUE_WITH_ERROR,error})
export const changeValueWithoutError = (): IChangedValueWithoutErrorAT => ({type: CHANGE_VALUE_WITHOUT_ERROR})
export const setCount = (start: number|null): ICountAT => ({type: SET_COUNT,start})
export const changeBtn = (btn: ButtonsType): IChangeBtnAT => ({type: CHANGE_BTN,btn})
export const setError = (errorText: string): IErrorAT => ({type: SET_ERROR, errorText})
