import React from "react";
import Counter from "../Counter";
import Button from "../Button";
import styles from './CounterBlock.module.scss';

export type ICounterBlockPropsType = {
    start: number
    end: number
    count: number|null
    btn: string
    incrementFunc: () => void
    resetFunc: () => void
    showCount: boolean
    error: string
}

const CounterBlock = (props: ICounterBlockPropsType) => {
    const {count, error, btn, incrementFunc, resetFunc, end,showCount,start} = props;
    const resInc = btn === 'inc';
    return (
        <div className={'block counter__box'}>
            <Counter
                end={end}
                start={start}
                count={count}
                showCount={showCount}
                error={error}
                resInc={resInc}/>
            <div className={styles.buttons}>
                <Button active={!(!showCount || !resInc)}
                        disabled={!showCount || !resInc}
                        onClick={incrementFunc}>inc</Button>
                <Button active={showCount}
                        disabled={!showCount}
                        onClick={resetFunc}>reset</Button>
            </div>
        </div>
    )
}
export default CounterBlock;