import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import s from "./Input.module.css"
import {useValidation} from "../../hooks/useValidation";

interface InputProps {
    type: string,
    placeholder?: string,
    value: string,
    F: (text: string) => void,
    error?: string
}

const Input: FC<InputProps> = ({

    type, placeholder, F, value, error}) => {


    let ChangeInput = function (e: React.ChangeEvent<HTMLInputElement>) {
        F(e.target.value)
    }



    return (
        <div className={s.Input}>
            {error ? <div style={{color:"red"}}>{error}</div> : <div></div>}
            <input placeholder={placeholder} value={value}  onChange={ChangeInput} type={type}/>
        </div>
    );
};

export default Input;