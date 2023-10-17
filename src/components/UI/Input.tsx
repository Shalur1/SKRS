import React, {FC, useState} from 'react';
import s from "./Input.module.css"

interface InputProps{
    type: string,
    placeholder?: string
}

const Input: FC<InputProps> = ({
    type, placeholder

                               }) => {

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