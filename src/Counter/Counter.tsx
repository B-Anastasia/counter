import React from "react";
import scss from './Counter.module.scss';

type CounterType = {
    start: number
    end: number
    count: number
    showCount: boolean
    error: string
    resInc: boolean
}

function Counter({start, end, count, showCount, error, resInc}: CounterType) {

    return (
        /*error ? <div className={'block__counter ' + scss.counter + ' ' + scss.active}>{error}</div> :
            !showCount ? <div className={'block__counter ' + scss.counter}>Please enter 'set'</div> :
                <div
                    className={!resInc ? 'block__counter ' + scss.counter + ' ' + scss.active : 'block__counter ' + scss.counter}>{count}</div>*/

        error ? <div className={'block__counter ' + scss.counter + ' ' + scss.active}>{error}</div> :
            (start === 0 && end === 0) ?
                <div className={'block__counter ' + scss.counter}>Please choose the values</div> :
                !showCount ?
                    <div className={'block__counter ' + scss.counter}>Please enter 'set'</div> :
                    <div
                        className={!resInc ? 'block__counter ' + scss.counter + ' ' + scss.active : 'block__counter ' + scss.counter}>
                        {count}
                    </div>
    )
}

export default Counter;