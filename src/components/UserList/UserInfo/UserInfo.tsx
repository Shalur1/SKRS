import React, {FC} from 'react';
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
                <UserInfoText text={name}/>
                <UserInfoText text={username}/>
                <UserInfoText text={email}/>
                <p>{birthday ? birthday : <p>не родился</p>}</p>
                <div>
                    Lida
                </div>
            </div>
        </div>
    );
};

export default UserInfo;