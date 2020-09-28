import React from "react";
import Counter from "../Counter";
import Button from "../Button";
import styles from './CounterBlock.module.scss';

export type ICounterBlockPropsType = {
    start: number
    end: number
    count: number|null
    btn: string
    showCount: boolean
    error: string
}

const CounterBlock = (props: ICounterBlockPropsType) => {
    const {count, error, btn, end,showCount,start} = props;
    const resInc = btn === 'inc';
//count !==null && !error
    const incrementFunc = () => {
        // if(count!==null){
        // saveState('count',count+1);
        // switch (true){
        //     case (count + 1 < end):
        //         setCount(count + 1);
        //         setBtn('inc');
        //         break;
        //     case (count+1 === end):
        //         setCount(count + 1);
        //         setBtn('reset');
        //         break;
        // }
        // }
    }

    const resetFunc = () => {
        // setCount(start);
        // setBtn('inc');
        // saveState('count',start);
    }

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