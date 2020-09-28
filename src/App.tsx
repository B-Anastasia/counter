import React, {useEffect, useState} from 'react';
import './App.scss';
import CounterBlock from "./CounterBlock/CounterBlock";
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {restoreState} from "./helperWithLocalStorage";
import {IInitialStateType, setCount, setEndValue, setError, setStartValue} from "./store/count-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/redux-store";

function App() {
const dispatch=useDispatch();
    const {start,btn,count,endError,startError, end,error}=useSelector<AppRootStateType,IInitialStateType>(state => state.counter);
    //
    // let [start, setStart] = useState<number>(restoreState('start', 0));
    // let [end, setEnd] = useState<number>(restoreState('end', 0));
    // let [startError, setStartError] = useState<boolean>(false);
    // let [endError, setEndError] = useState<boolean>(false);
    // let [count, setCount] = useState<number|null>(restoreState('count', null));
    // let [btn, setBtn] = useState<ButtonsType>('inc');

    let [showCount, setShowCount] = useState<boolean>(count!==null);
        const initialError = (end < start || (!(end === 0 && start === 0) && end === start)) ? 'Invalid value' : '';

    useEffect(()=>{
        const localStorageStartValue=restoreState('start');
        (localStorageStartValue !== null) && dispatch(setStartValue(localStorageStartValue))
        const localStorageEndValue=restoreState('end');
        (localStorageEndValue !== null) && dispatch(setEndValue(localStorageEndValue))
        const localStorageCount=restoreState('count');
        (localStorageCount !== null) && dispatch(setCount(localStorageCount))
        dispatch(setError(initialError))
    },[])


    // let [error, setError] = useState<string>(initialError);






    return (
        <div className={'app'}>
            <div className={'app__body container'}>
                <CounterSettings
                    start={start}
                    end={end}
                    startError={startError}
                    endError={endError}
                    error={!!error}
                    showCount={showCount}
                    setShowCount={setShowCount}
                />
                <CounterBlock
                    start={start}
                    end={end}
                    count={count}
                    btn={btn}
                    showCount={showCount}
                    error={error}
                />
            </div>
        </div>
    );
}

export default App;