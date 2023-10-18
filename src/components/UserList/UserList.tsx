import React, {FC, useState} from 'react';
import s from "./UserList.module.css"
import Button from "../UI/Button";
import Input from "../UI/Input";
import UserInfo from "./UserInfo/UserInfo";
import Select from "../UI/Select";

interface UserListProps {
    name: string,
    username: string,
    email: string,
    birthday?: string,
    city?: string
}

const UserList: FC<UserListProps> = ({
                                         name, username, email, birthday, city
                                     }) => {

    let [optionValue, setOptionValue] = useState<string>("Lida")

    let options = [
        {value: "Lida"},
        {value: "Mak.by"},
        {value: "KFC"},
        {value: "Minsk"},
        {value: "v mame"},

    ]

    let [isActive, setIsActive] = useState<boolean>(false)

    // let setActive = function () {
    //     setIsActive(!isActive)
    // }


    let changeSelect = function (e: React.ChangeEvent<HTMLSelectElement>) {
        setOptionValue(e.target.value)
    }

    return (
        <div className={s.UserListDiv}>
            <div className={s.UserList}>
                <UserInfo name={name} email={email} username={username} birthday={birthday}/>
                <div className={s.Select}>
                    <Select options={options}/>
                </div>
                <div>
                    <Button>Редактировать профиль</Button>
                </div>
            </div>
        </div>
    );
};

export default UserList;