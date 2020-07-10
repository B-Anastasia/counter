import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import scss from './Button.module.scss';

type ButtonPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    > & {active: boolean};

// function Button({title,onClickFunc,active}:ButtonPropsType) {
// return(
//     <button
//         disabled={!active}
//         onClick={onClickFunc}
//         className={active? `${scss.button} ${scss.active}`:scss.button}>{title}</button>
// )
// }
const Button: React.FC<ButtonPropsType> = ({active, ...props }) => {
    return <button {...props} className={active? `${scss.button} ${scss.active}`:scss.button} />;
};


export default Button;