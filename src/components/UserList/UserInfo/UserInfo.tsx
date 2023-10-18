import React, {FC} from 'react';

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
                <p>{name}</p>
                <p>{username}</p>
                <p>{email}</p>
                <p>{birthday ? birthday : <p>не родился</p>}</p>
                <div>
                    Lida
                </div>
            </div>
        </div>
    );
};

export default UserInfo;