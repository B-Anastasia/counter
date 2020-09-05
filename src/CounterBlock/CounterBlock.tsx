import React from "react";
import Counter from "../Counter";
import Button from "../Button";
import styles from './CounterBlock.module.scss';

export type ICounterBlockPropsType = {
    start: number
    end: number
    count: number
    btn: string
    incrementFunc: () => void
    resetFunc: () => void
    showCount: boolean
    error: string
}

const CounterBlock = (props: ICounterBlockPropsType) => {
    const {count, error, btn, incrementFunc, resetFunc} = props;
    const resInc = btn === 'inc';
    return (
        <div className={'block counter__box'}>
            <Counter
                end={props.end}
                start={props.start}
                count={count}
                showCount={props.showCount}
                error={error}
                resInc={resInc}/>
            <div className={styles.buttons}>
                <Button active={!(!props.showCount || !resInc)}
                        disabled={!props.showCount || !resInc}
                        onClick={incrementFunc}>inc</Button>
                <Button active={props.showCount}
                        disabled={!props.showCount}
                        onClick={resetFunc}>reset</Button>
            </div>
        </div>
    )
}
export default CounterBlock;