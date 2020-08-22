import React, {ChangeEvent} from "react";
import Button from "../Button";
import scss from './counter-settings.module.scss';

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

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.id === 'maxVal') {
            props.setEnd(Number.parseInt(e.currentTarget.value));
            // saveState('end',Number.parseInt(e.currentTarget.value));
            return;
        }
        if (e.currentTarget.id === 'minVal') {
            props.setStart(Number.parseInt(e.currentTarget.value));
            return;
        }
    }

    const {start,end}=props;

    const sameValue = (!(end===0 && start===0) && end === start) ;
    const activeButton= (props.error || props.showCount ||(end===0 && start===0));

    return (
        <div className={'block counter__box'}>
            <div className={'block__counter'}>
                <div>
                    <label htmlFor="maxVal">max value:</label>
                    <input className={props.endError || sameValue ? scss.error : scss.input}
                           type="number"
                           id="maxVal"
                           name="end"
                           value={props.end}
                           onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="minVal">min value:</label>
                    <input className={props.startError || sameValue ? scss.error : scss.input}
                           type="number" id="minVal"
                           name="start"
                           value={props.start}
                           onChange={onChange}/>
                </div>
            </div>
            <div className={'block buttons'}>
                <Button active={!activeButton}
                        disabled={activeButton}
                        onClick={props.setSettings}>
                    set</Button>
            </div>
        </div>
    )
}