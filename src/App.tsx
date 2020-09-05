import React, {useState} from 'react';
import './App.scss';
import CounterBlock from "./CounterBlock/CounterBlock";
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {restoreState, saveState} from "./helperWithLocalStorage";

export type ButtonsType = 'inc' | 'reset' | 'set';

function App() {
    let [start, setStart] = useState<number>(restoreState('start', 0));
    let [end, setEnd] = useState<number>(restoreState('end', 0));
    let [startError, setStartError] = useState<boolean>(false);
    let [endError, setEndError] = useState<boolean>(false);
    let [count, setCount] = useState<number|null>(restoreState('count', null));
    let [btn, setBtn] = useState<ButtonsType>('inc');
    let [showCount, setShowCount] = useState<boolean>(count!==null);

    const initialError = (end < start || (!(end === 0 && start === 0) && end === start)) ? 'Invalid value' : '';
    let [error, setError] = useState<string>(initialError);

    const setSettings = () => {
        if (!error) {
            setCount(start)
            setShowCount(true)
            saveState('count',start);
        }
    }

    const incrementFunc = () => {
        if(count!==null){
        saveState('count',count+1);
        switch (true){
            case (count + 1 < end):
                setCount(count + 1);
                setBtn('inc');
                break;
            case (count+1 === end):
                setCount(count + 1);
                setBtn('reset');
                break;
        }
        }
    }

    const resetFunc = () => {
        setCount(start);
        setBtn('inc');
        saveState('count',start);
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
            setStart(value)
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
            setEnd(value)
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
                <CounterSettings
                    start={start}
                    end={end}
                    startError={startError}
                    endError={endError}
                    error={!!error}
                    setStart={onChangeStartValue}
                    showCount={showCount}
                    setEnd={onChangeEndValue}
                    setSettings={setSettings}/>
                <CounterBlock
                    start={start}
                    end={end}
                    count={count}
                    btn={btn}
                    incrementFunc={incrementFunc}
                    resetFunc={resetFunc}
                    showCount={showCount}
                    error={error}
                />
            </div>
        </div>
    );
}

export default App;