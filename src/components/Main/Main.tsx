import React, {useState} from 'react';
import Input from "../UI/Input";
import {useValidation} from "../../hooks/useValidation";
import {useGetRegExp} from "../../hooks/useGetRegExp";
import Button from "../UI/Button";
import s from "./Main.module.css"
import {useNavigate} from "react-router-dom";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useActions, useAppSelector} from "../../hooks/redux";


const Main = () => {

    const nav = useNavigate()
    const tickets = useAppSelector(state => state.mainReducer.tickets)
    const {getInfo, setInfo} = useLocalStorage()
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<string>("")
    const {addTicket} = useActions()

    const Change = function (text: string,) {
        setValue(text)
        setError(useValidation(text, useGetRegExp("name")))
    }

    const Redirect = function () {
        nav("/tickets")
    }

    const sendTicket = function () {
        if (error !== ""){
            return
        }
        else{
            let obj = {
                id: Date.now(),
                name: value,
                massages: []
            }
            let NewArr = [...tickets, obj]
            setInfo("tickets", NewArr)
            addTicket(obj)
            console.log(getInfo("tickets"))
        }
    }

    return (
        <div className={s.Main}>
            <div onClick={Redirect} className={s.Tickets}>
                <h2>My tickets</h2>
            </div>
            <div>
                <h1>
                    Ask question
                </h1>
            </div>
            <Input placeholder={"title"} error={error} type={"text"} value={value} F={Change}/>
            <div onClick={sendTicket}>
                <Button>Send</Button>
            </div>
        </div>
    );
};

export default Main;