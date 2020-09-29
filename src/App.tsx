import React, {useEffect} from 'react';
import './App.scss';
import CounterBlock from "./CounterBlock/CounterBlock";
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {restoreState} from "./helperWithLocalStorage";
import {changeBtn, IInitialStateType, setCount, setEndValue, setStartValue} from "./store/count-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/redux-store";

function App() {
    const {start, btn, count, endError, startError, end, error} = useSelector<AppRootStateType, IInitialStateType>(state => state.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        const localStorageStartValue = restoreState('start');
        const localStorageEndValue = restoreState('end');
        const localStorageCount = restoreState('count');

        if (localStorageStartValue !== null) dispatch(setStartValue(localStorageStartValue))
        if (localStorageEndValue !== null) dispatch(setEndValue(localStorageEndValue))
        if ((localStorageCount !== null) && localStorageCount >= 0) {
            dispatch(changeBtn('inc'));
            dispatch(setCount(localStorageCount))
        }
    }, [])

    return (
        <div className={'app'}>
            <div className={'app__body container'}>
                <CounterSettings
                    start={start}
                    end={end}
                    startError={startError}
                    endError={endError}
                    error={error}
                    btn={btn}
                    count={count}
                />
                <CounterBlock
                    error={error}
                    start={start}
                    end={end}
                    count={count}
                    btn={btn}
                />
            </div>
        </div>
    );
}

export default App;