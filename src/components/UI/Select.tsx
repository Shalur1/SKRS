import React from 'react';
import {FC} from "react";
import s from "./Select.module.css"


interface IOption{
    value: string,
    id?: number,
}

export interface SelectProps{
    options: IOption[]
}

const Select:FC<SelectProps> = ({
    options
                                }) => {
    return (
        <div>
            <select className={s.Select} name="" id="">
                {options.map((elem) =>(
                    <option>{elem.value}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;