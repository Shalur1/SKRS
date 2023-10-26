import React, {FC, useEffect, useState} from 'react';
import s from "./UserList.module.css"
import UserInfo from "./UserInfo/UserInfo";
import Select from "../UI/Select";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {SetProfileInfo} from "../../redux/profile/profileSlice";

interface UserListProps {

}

const UserList: FC<UserListProps> = () => {

    const initialObject = {
        name: "Aliaksandr",
        username: "Shlapik",
        email: "lolxax52@gmail.com",
        cityList:[
            {value: "Lida"},
            {value: "Mak.by"},
            {value: "KFC"},
            {value: "Minsk"},
            {value: "v mame"},
        ]
    };

    const uInfo = useAppSelector(state => state.profileReducer)
    const {getInfo, setInfo} = useLocalStorage()
    const dispatch = useAppDispatch()

    useEffect(()=>{
        setInfo("uInfo", initialObject)
        dispatch(SetProfileInfo(getInfo("uInfo")))
    },[])

    return (
        <div className={s.UserListDiv}>
            <div className={s.UserList}>
                <UserInfo namee={uInfo.name} email={uInfo.email} username={uInfo.username}/>
                <div className={s.Select}>
                    <Select options={uInfo.cityList}/>
                </div>
            </div>
        </div>
    );
};

export default UserList;