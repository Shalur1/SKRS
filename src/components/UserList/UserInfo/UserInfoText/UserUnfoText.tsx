import React, {FC, useEffect, useState} from 'react';
import s from "./UserInfoText.module.css"
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import {useActions} from "../../../../hooks/redux"
import {useValidation} from "../../../../hooks/useValidation";

interface UserInfoTextProps {
    text: string,
    name: string,
}

const UserInfoText: FC<UserInfoTextProps> = ({text, name}) => {

        useEffect(() => {
            setValue(text)
        }, [text])

        const [value, setValue] = useState<string>("")
        const [isChanged, setIsChanged] = useState<boolean>(false)
        const [error, setError] = useState<string>("")

        const {
            changeName, changeUserName, changeEmail
        } = useActions();

        function getName(type: string) {
            if (type === "name" || "username"){
                return /[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*/
            }
            else if (type === "email"){
                return /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
            }
            else return /[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*/
        }

        let Change = function (text: string,) {
            setValue(text)
            setError(useValidation(text, getName(name)))
        }


        let ChangeText = function (e: React.MouseEvent<HTMLDivElement>) {
            if (error === "") {
                setIsChanged(!isChanged)
                if (name === "name") {
                    changeName(value)
                }
                if (name === "email") {
                    changeEmail(value)
                }
                if (name === "username") {
                    changeUserName(value)
                }
            } else return
        }


        return (
            !isChanged ?
                <div onClick={ChangeText} className={s.UserInfoText}>
                    <p>{text}</p>
                </div> :
                <div className={s.ChangeInput}>
                    <Input error={error} F={Change} type={"text"} value={value}/>
                    <div onClick={ChangeText}>
                        <Button>Сохранить</Button>
                    </div>
                </div>
        );
    }
;

export default UserInfoText;


// let validation = function (text: string) {
//     if (name === "name" || "username") {
//         let re = /[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*/
//         if (re.test(text)) {
//             setError("")
//         } else setError("Неверный логин")
//     }
//     if (name === "email") {
//         let re = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
//         if (re.test(text)) {
//             setError("")
//         } else setError("Неверный email")
//     } else return
// }