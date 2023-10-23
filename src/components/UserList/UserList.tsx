import React, {FC, useEffect, useRef, useState} from 'react';
import s from "./UserList.module.css"
import Button from "../UI/Button";
import Input from "../UI/Input";
import UserInfo from "./UserInfo/UserInfo";
import Select from "../UI/Select";
import {useAppSelector} from "../../hooks/redux";
import {useNavigate} from "react-router-dom";

interface UserListProps {
    name: string,
    username: string,
    email: string,
    birthday?: string,
    city?: string
}

const UserList: FC<UserListProps> = ({
                                         name, username, email, birthday, city,
                                     }) => {

    let cityList = useAppSelector(state => state.profileReducer.cityList)


    return (
        <div className={s.UserListDiv}>
            <div className={s.UserList}>
                <UserInfo name={name} email={email} username={username} birthday={birthday}/>
                <div className={s.Select}>
                    <Select options={cityList}/>
                </div>
            </div>
        </div>
    );
};

export default UserList;