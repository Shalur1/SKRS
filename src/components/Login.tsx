import React, {FC} from 'react';
import s from  "../styles/Login.module.css"
import Input from "./UI/Input";
import Button from "./UI/Button";
import {useNavigate} from "react-router-dom";

interface LoginProps {
    setIsAuthTrue: () => any
}

const Login:FC<LoginProps> = ({setIsAuthTrue}) => {

    const navigate = useNavigate()


    let gg = function () {
        setIsAuthTrue()
        navigate("/profile")
    }

    return (
        <div className={s.Login}>
            <div className={s.Inputs}>
               Login: <Input type={"text"} placeholder={"Введите логин"}/>
               Password: <Input placeholder={"Введите пароль"} type={"password"}/>
            </div>
            <div onClick={gg}>
                <Button>Login</Button>
            </div>
        </div>
    );
};

export default Login;