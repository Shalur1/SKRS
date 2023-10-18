import React from 'react';
import {FC} from "react";
import s from "./Button.module.css"

interface ButtonProps{
    children?: React.ReactNode
}

const Button: FC<ButtonProps> = ({children}) => {
    return (
        <div className={s.Button}>
            <button>{children}</button>
        </div>
    );
};

export default Button;