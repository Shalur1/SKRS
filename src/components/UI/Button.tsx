import React from 'react';
import {FC} from "react";

interface ButtonProps{
    children?: React.ReactNode
}

const Button: FC<ButtonProps> = ({children}) => {
    return (
        <div>
            <button>{children}</button>
        </div>
    );
};

export default Button;