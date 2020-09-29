import React, {ChangeEvent} from "react";
import Button from "../Button";
import scss from './CounterSettings.module.scss';
import {
    ButtonsType,
    changeBtn,
    changeValueWithError,
    changeValueWithoutError,
    setCount,
    setEndValue,
    setStartValue
} from "../store/count-reducer";
import {useDispatch} from "react-redux";
import {saveState} from "../helperWithLocalStorage";

type ICounterSettingsPropsType = {
    start: number
    end: number
    error: string
    startError: boolean
    endError: boolean
    btn: ButtonsType
    count: number | null
}


export const CounterSettings = (props: ICounterSettingsPropsType) => {

    const {start, end, endError, error, btn, count, startError} = props;

    const dispatch = useDispatch();

    const checkValue = (value: number): boolean => {
        if (value < 0 || value === undefined || !isFinite(value) || (value === start && value !== 0) || (value === end && value !== 0)) {
            return false
        }
        return true;
    }

    //thunk????
    const setSettings = () => {
        console.log('setting')
        dispatch(setCount(start))
        dispatch(changeBtn('inc'))
        //
        saveState('count', start)
        saveState('start', start)
        saveState('end', end)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCount(null))
        dispatch(changeBtn('set'))
        const value = Number.parseInt(e.currentTarget.value);
        if (e.currentTarget.id === 'maxVal') {
            dispatch(setEndValue(value))
            if (checkValue(value) && value >= start) {
                dispatch(changeValueWithoutError())
            } else {
                dispatch(changeValueWithError('Invalid max value'))
            }
        } else if (e.currentTarget.id === 'minVal') {
            dispatch(setStartValue(value))
            if (checkValue(value) && value <= end) {
                dispatch(changeValueWithoutError())
            } else {
                dispatch(changeValueWithError('Invalid min value'))
            }
        }
    }


    const sameValue = (!(end === 0 && start === 0) && end === start);
    const activeButton = (!error && !(end === 0 && start === 0) && !count && btn === 'set');

    return (
        <div className={'block'}>
            <div className={'block__counter'}>
                <div className={scss.input_block}>
                    <label htmlFor="maxVal">max value:</label>
                    <input className={endError || sameValue ? scss.error : scss.input}
                           type="number"
                           id="maxVal"
                           name="end"
                           value={end}
                           onChange={onChange}/>
                </div>
                <div className={scss.input_block}>
                    <label htmlFor="minVal">min value:</label>
                    <input className={startError || sameValue ? scss.error : scss.input}
                           type="number" id="minVal"
                           name="start"
                           value={start}
                           onChange={onChange}/>
                </div>
            </div>
            <div>
                <Button active={activeButton}
                        disabled={!activeButton}
                        onClick={setSettings}>
                    set
                </Button>
            </div>
        </div>
    )
}