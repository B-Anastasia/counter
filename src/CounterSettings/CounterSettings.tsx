import React, {ChangeEvent} from "react";
import Button from "../Button";
import scss from './CounterSettings.module.scss';

type ICounterSettingsPropsType = {
    start: number
    end: number
    setStart: (val: number) => void
    setEnd: (val: number) => void
    setSettings: () => void
    showCount: boolean
    error: boolean
    startError: boolean
    endError: boolean
}


export const CounterSettings = (props: ICounterSettingsPropsType) => {

    const {start, end, endError, setStart, error, showCount, setSettings, setEnd, startError} = props;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.id === 'maxVal') {
            setEnd(Number.parseInt(e.currentTarget.value));
        } else if (e.currentTarget.id === 'minVal') {
            setStart(Number.parseInt(e.currentTarget.value));
        }
    }


    const sameValue = (!(end === 0 && start === 0) && end === start);
    const activeButton = (error || showCount || (end === 0 && start === 0));

    return (
        <div className={'block'}>
            <div className={'block__counter'}>
                <div className={scss.input_block}>
                    <label htmlFor="maxVal">max value:</label>
                    <input className={endError || sameValue ? scss.error : scss.input}
                           type="number"
                           id="maxVal"
                           name="end"
                           value={end}
                           onChange={onChange}/>
                </div>
                <div className={scss.input_block}>
                    <label htmlFor="minVal">min value:</label>
                    <input className={startError || sameValue ? scss.error : scss.input}
                           type="number" id="minVal"
                           name="start"
                           value={start}
                           onChange={onChange}/>
                </div>
            </div>
            <div>
                <Button active={!activeButton}
                        disabled={activeButton}
                        onClick={setSettings}>
                    set
                </Button>
            </div>
        </div>
    )
}