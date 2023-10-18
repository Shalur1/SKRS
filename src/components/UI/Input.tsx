import React, {FC, useEffect, useState} from 'react';
import s from "./Input.module.css"

interface InputProps{
    type: string,
    placeholder?: string,
    value1?: string
}

const Input: FC<InputProps> = ({
    type, placeholder, value1}) => {

    useEffect(()=>{
        value1 ? setValue(value1) : setValue("")
    }, [])

    const [value, setValue] = useState<string>("")

    let ChangeInput = function (e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }

    return (
        <div className={s.Input}>
            <input placeholder={placeholder} value={value} onChange={ChangeInput} type={type}/>
        </div>
    );
};

export default Input;