import React from "react";
import scss from './Counter.module.scss';

type CounterType = {
    start: number
    end: number
    count: number | null
    showCount: boolean
    error: string
    resInc: boolean
}

function Counter({start, end, count, error, resInc}: CounterType) {
    const backgroundStyle = `block__counter ${scss.counter} `
    const countStyle = resInc
        ? backgroundStyle + scss.active
        : backgroundStyle + scss.counter;


    const text = (!error && start && end && (start !== 0 && end !== 0))
        ? `Please enter 'set'`
        : 'Please choose the values'

    return (
        error
            ? <div className={`${backgroundStyle} ${scss.active}`}>{error}</div>
            : (count !== null)
                ? <div className={countStyle}>{count}</div>
                : <div className={backgroundStyle}>{text}</div>

        // error
        //     ? <div className={`${backgroundStyle} ${scss.active}`}>{error}</div>
        //     : (start === 0 && end === 0)
        //     ? <div className={backgroundStyle}>Please choose the values</div>
        //     : showCount
        //         ? <div
        //             className={countStyle}>
        //             {count}
        //         </div>
        //         :<div className={backgroundStyle}>Please enter 'set'</div>
    )
}

export default Counter;