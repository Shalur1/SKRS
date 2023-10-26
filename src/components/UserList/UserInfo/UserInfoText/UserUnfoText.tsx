import React, {FC, useEffect, useState} from 'react';
import s from "./UserInfoText.module.css"
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import {useValidation} from "../../../../hooks/useValidation";
import {useGetRegExp} from "../../../../hooks/useGetRegExp";
import {SetProfileInfo} from "../../../../redux/profile/profileSlice";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {useLocalStorage} from "../../../../hooks/useLocalStorage";


interface UserInfoTextProps {
    text: string,
    namee: string,
}

const newObj = {
    ...JSON.parse(localStorage.uInfo)
}

const UserInfoText: FC<UserInfoTextProps> = ({text, namee}) => {

        useEffect(() => {
            setValue(text)
        }, [text])

        const [value, setValue] = useState<string>("")
        const [isChanged, setIsChanged] = useState<boolean>(false)
        const [error, setError] = useState<string>("")
        const {getInfo, setInfo} = useLocalStorage()
        const dispatch = useAppDispatch()

        const Change = function (text: string,) {
            setValue(text)
            setError(useValidation(text, useGetRegExp(namee)))
        }

        const ChangeText = function (e: React.MouseEvent<HTMLDivElement>) {
            if (!isChanged) {
                setIsChanged(true)
            } else if (error === "" && isChanged) {
                newObj[namee] = value
                setInfo("uInfo", newObj)
                dispatch(SetProfileInfo(getInfo("uInfo")))
                setIsChanged(false)
            } else return
        }

        return (
            !isChanged ?
                <div onClick={ChangeText} className={s.UserInfoText}>
                    <p>{text}</p>
                </div> :
                <div className={s.ChangeInput}>
                    <Input error={error} F={Change} type={"text"} value={value}/>
                    <div className={s.efc} onClick={ChangeText}>
                        <Button>Сохранить</Button>
                    </div>
                </div>
        );
    }
;

export default UserInfoText;