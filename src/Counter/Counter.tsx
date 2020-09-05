import React from "react";
import scss from './Counter.module.scss';

type CounterType = {
    start: number
    end: number
    count: number|null
    showCount: boolean
    error: string
    resInc: boolean
}

function Counter({start, end, count, showCount, error, resInc}: CounterType) {

    const countStyle = !resInc
        ? 'block__counter ' + scss.counter + ' ' + scss.active
        : 'block__counter ' + scss.counter;

    const backgroundStyle = `block__counter ${scss.counter}`

    return (
        error
            ? <div className={`${backgroundStyle} ${scss.active}`}>{error}</div>
            : (start === 0 && end === 0)
            ? <div className={backgroundStyle}>Please choose the values</div>
            : showCount
                ? <div
                    className={countStyle}>
                    {count}
                </div>
                :<div className={backgroundStyle}>Please enter 'set'</div>
    )
}

export default Counter;