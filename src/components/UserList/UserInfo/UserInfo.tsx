import React, {FC, useState} from 'react';
import UserInfoText from "./UserInfoText/UserUnfoText";

interface UserInfoProps {
    namee: string,
    username: string,
    email: string,
    birthday?: string,
    city?: string
}

const UserInfo: FC<UserInfoProps> = ({namee, username, email, birthday, city}) => {
    return (
        <div>
            <div>
                <UserInfoText text={namee} namee={"name"}/>
                <UserInfoText text={username} namee={"username"}/>
                <UserInfoText text={email} namee={"email"}/>
                <p>{birthday ? birthday : <p>не родился</p>}</p>
                <div>
                    Lida
                </div>
            </div>
        </div>
    );
};

export default UserInfo;