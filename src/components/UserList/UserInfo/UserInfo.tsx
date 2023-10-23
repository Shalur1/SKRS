import React, {FC, useState} from 'react';
import UserInfoText from "./UserInfoText/UserUnfoText";

interface UserInfoProps {
    name: string,
    username: string,
    email: string,
    birthday?: string,
    city?: string
}

const UserInfo: FC<UserInfoProps> = ({name, username, email, birthday, city}) => {
    return (
        <div>
            <div>
                <UserInfoText text={name} name={"name"}/>
                <UserInfoText text={username} name={"username"}/>
                <UserInfoText text={email} name={"email"}/>
                <p>{birthday ? birthday : <p>не родился</p>}</p>
                <div>
                    Lida
                </div>
            </div>
        </div>
    );
};

export default UserInfo;