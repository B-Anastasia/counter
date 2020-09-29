import React from "react";
import scss from './Counter.module.scss';

type CounterType = {
    start: number
    end: number
    count: number | null
    error: string
    btnInc: boolean
}

function Counter({start, end, error, count, btnInc}: CounterType) {

    const backgroundStyle = `block__counter ${scss.counter} `

    const countStyle = btnInc
        ? backgroundStyle + scss.counter
        : backgroundStyle + scss.active

    const text = (!error && ((start === 0 && end > 0) || (start > 0 && end === 0) || (start > 0 && end > 0)))
        ? `Please enter 'set'`
        : 'Please choose the values'

    return (
        error
            ? <div className={`${backgroundStyle} ${scss.active}`}>{error}</div>
            : (count !== null)
            ? <div className={countStyle}>{count}</div>
            : <div className={backgroundStyle}>{text}</div>
    )
}

export default Counter;