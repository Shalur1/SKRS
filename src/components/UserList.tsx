import React, {FC, useState} from 'react';
import Select, {SelectProps} from "./UI/Select";

interface UserListProps {
    id: number,
    name: string,
    username: string,
    email: string,
    birthday?: string,
    city?: string
}

const UserList: FC<UserListProps> = ({
                                         id, name, username, email, birthday, city
                                     }) => {

    let [value, setValue] = useState<string>("Lida")

    let options = [
        {value: "Lida"},
        {value: "Mak.by"},
        {value: "KFC"},
        {value: "Minsk"},
        {value: "v mame"},

    ]

    let changeSelect = function (e: React.ChangeEvent<HTMLSelectElement>){
        setValue(e.target.value)
    }

    return (
        <div>
            <h1>{name}</h1>
            <h2>{username}</h2>
            ПОЧТА:<p>{email}</p>
            ДАТА РОЖДЕНИЯ: <p>{birthday ? birthday : <p>не родился</p>}</p>
            ГОРОД:
            <Select options={options}/>
        </div>
    );
};

export default UserList;