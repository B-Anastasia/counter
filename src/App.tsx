import React, {useState} from 'react';
import './App.scss';
import Counter from "./Counter";
import Button from "./Button";

export type ButtonsType = 'inc' | 'reset';

function App() {
    let [count, setCount] = useState<number>(0);
    let [btn, setBtn] = useState<ButtonsType>('inc');
    // let [error, setError]=useState<string>('');
    const defaultVal=5;
    const incrementFunc = () => {
        console.log('1')
        if (count < defaultVal) {
            setCount(count + 1);

        }

        if (count === defaultVal-1) {
            setCount(count + 1);
            setBtn('reset');
        }
    }
    const resetFunc = () => {
        setCount(0);
        setBtn('inc')
    }


    return (
        <div className="app">
            <CounterBlock count={count} btn={btn} incrementFunc={incrementFunc} resetFunc={resetFunc} />
        </div>
    );
}

export default App;


export type ICounterBlockPropsType={
    count: number;
    btn:string;
    incrementFunc:()=>void;
    resetFunc: ()=>void
}
export const CounterBlock=(props:ICounterBlockPropsType)=>{
    const {count,btn, incrementFunc,resetFunc}= props;
    const resInc=btn === 'inc';
    // const resReset=btn === 'reset';
    return (
        <div className={'block counter__box'}>
            <Counter count={count}/>
            <div className={'block buttons'}>
                <Button  active={resInc}  disabled={!resInc} onClick={incrementFunc}>inc</Button>
                <Button active={true}  onClick={resetFunc}>reset</Button>
            </div>
        </div>
    )
}
