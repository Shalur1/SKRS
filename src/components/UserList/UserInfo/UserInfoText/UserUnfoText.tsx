import React, {FC, useState} from 'react';
import s from "./UserInfoText.module.css"
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";

interface UserInfoTextProps {
    text: string
}

const UserInfoText: FC<UserInfoTextProps> = ({text}) => {

    let [isChanged, setIsChanged] = useState<boolean>(false)

    let ChangeText = function (e: React.MouseEvent<HTMLDivElement>) {
        setIsChanged(!isChanged)
    }


    return (
        !isChanged ?
            <div onClick={ChangeText} className={s.UserInfoText}>
                <p>{text}</p>
            </div> :
            <div className={s.ChangeInput}>
                <Input type={"text"} value1={text}/>
                <div onClick={ChangeText}>
                    <Button>Сохранить</Button>
                </div>
            </div>
    );
};

export default UserInfoText;