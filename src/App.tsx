import React, {useState} from 'react';
import './App.scss';
import CounterBlock from "./CounterBlock/CounterBlock";
import {CounterSettings} from "./CounterSettings/CounterSettings";

export type ButtonsType = 'inc' | 'reset' | 'set';

function App() {
    let [start, setStart] = useState<number>(restoreState('start', 0));
    let [end, setEnd] = useState<number>(restoreState('end', 0));
    let [startError, setStartError] = useState<boolean>(false);
    let [endError, setEndError] = useState<boolean>(false);
    let [count, setCount] = useState<number>(0);
    let [btn, setBtn] = useState<ButtonsType>('inc');
    let [showCount, setShowCount] = useState<boolean>(false);

    const initialError = (end < start || (!(end === 0 && start === 0) && end === start)) ? 'Invalid value' : '';
    let [error, setError] = useState<string>(initialError);

    const setSettings = () => {
        if (error) {
            return;
        }
        setCount(start)
        setShowCount(true)
    }

    const incrementFunc = () => {
        if (count + 1 < end) {
            setCount(count + 1);
            setBtn('inc');
            return;
        }

        if (count === end - 1) {
            setCount(count + 1);
            setBtn('reset');
        }
    }
    const resetFunc = () => {
        setCount(start);
        setBtn('inc');
    }

    const checkValue = (value: number) => {
        if (value < 0 || value === undefined || !isFinite(value) || (value === start && value !== 0) || (value === end && value !== 0)) {
            setError('Invalid value')
            return false
        }
        setError('')
        return true;

    }

    const onChangeStartValue = (value: number) => {

        if (checkValue(value) && value <= end) {
            saveState('start', value);
            setStart(restoreState('start', 0))
            setError('')
            setShowCount(false)
            setStartError(false)
            setEndError(false)
            return;
        }
        setStart(value)
        setError('Invalid value')
        setStartError(true)
        setEndError(true)
    }
    const onChangeEndValue = (value: number) => {

        if (checkValue(value) && value >= start) {
            saveState('end', value);
            setEnd(restoreState('end', 0))
            setError('')
            setShowCount(false)
            setStartError(false)
            setEndError(false)
            return;
        }
        setEnd(value)
        setError('Invalid value')
        setEndError(true)
        setStartError(true)
    }

    return (
        <div className={'app'}>
            <div className={'app__body container'}>
                <CounterSettings start={start} end={end} startError={startError} endError={endError} error={!!error}
                                 setStart={onChangeStartValue} showCount={showCount} setEnd={onChangeEndValue}
                                 setSettings={setSettings}/>
                <CounterBlock start={start} end={end} count={count} btn={btn} incrementFunc={incrementFunc}
                              resetFunc={resetFunc}
                              showCount={showCount} error={error}/>
            </div>
        </div>
    );
}

export default App;


// функция для сохранения объектов в память браузера (данные в этом хранилище сохраняться даже при перезагрузке компа)
export function saveState<T>(key: string, state: T) {
    const stateAsString2 = JSON.stringify(state);
    localStorage.setItem(key, stateAsString2);
}

// функция для получения сохранённого объекта в памяти браузера
export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}