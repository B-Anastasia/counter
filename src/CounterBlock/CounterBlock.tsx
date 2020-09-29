import React from "react";
import Counter from "../Counter";
import Button from "../Button";
import styles from './CounterBlock.module.scss';
import {useDispatch} from "react-redux";
import {changeBtn, setCount} from "../store/count-reducer";

export type ICounterBlockPropsType = {
    start: number
    end: number
    count: number | null
    btn: string
    error: string
}

const CounterBlock = (props: ICounterBlockPropsType) => {
    const {count, btn, end, error, start} = props;

    const btnInc = btn === 'inc';
    const dispatch = useDispatch();
    const incrementFunc = () => {
        if (count !== null) {
            switch (true) {
                case (count + 1 < end):
                    dispatch(changeBtn('inc'))
                    dispatch(setCount(count + 1))
                    break;
                case (count + 1 === end):
                    dispatch(changeBtn('reset'))
                    dispatch(setCount(count + 1))
                    break
                default:
                    return;
            }
        }
    }

    const resetFunc = () => {
        dispatch(setCount(start))
        dispatch(changeBtn('inc'))
    }

    return (
        <div className={'block counter__box'}>
            <Counter
                end={end}
                start={start}
                count={count}
                error={error}
                btnInc={btnInc}/>
            <div className={styles.buttons}>
                <Button active={btnInc}
                        disabled={!btnInc}
                        onClick={incrementFunc}>inc</Button>
                <Button active={btn === 'reset'}
                        disabled={btn !== 'reset'}
                        onClick={resetFunc}>reset</Button>
            </div>
        </div>
    )
}
export default CounterBlock;