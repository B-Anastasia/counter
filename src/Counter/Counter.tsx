import React from "react";
import scss from './Counter.module.scss';

type CounterType={
    count: number
}

function Counter({count}:CounterType) {

return(
    <div className={count>=5 ? scss.counter+' '+scss.active: scss.counter}>{count}</div>
)
}

export default Counter;