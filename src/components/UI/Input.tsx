import React, {FC} from 'react';
import s from "./Input.module.css"

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
            {error ? <div className={s.errorWrapper}><p className={s.errorMessage}>{error}</p></div> : <div></div>}
            <div className={s.inputWrapper}>
                <input className={s.input} placeholder={placeholder} value={value}  onChange={ChangeInput} type={type}/>
            </div>
        </div>
    );
};

export default Input;