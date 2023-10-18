import React, {useState} from 'react';
import './App.css';
import Login from "./components/Login/Login";
import UserList from "./components/UserList/UserList";
import {BrowserRouter, Route, Routes} from "react-router-dom";

interface IUserInfo {
    name: string,
    username: string,
    email: string
}

function App() {

    let [isAuth, setIsAuth] = useState<boolean>(false)

    let setIsAuthTrue = function () {
        setIsAuth(true)
    }

    let [userInfo, setUserInfo] = useState<IUserInfo>({
        name: "Aliaksandr",
        username: "Shlapik",
        email: "lolxax52@gmail.com"
    })






    return (
        <BrowserRouter>
            {isAuth ?
                <Routes>
                    <Route path={"/profile"} element={<UserList name={userInfo.name} username={userInfo.username}
                                                         email={userInfo.email}/>}/>

                </Routes> :
                <Routes>
                    <Route path={"/"} element={<Login setIsAuthTrue={setIsAuthTrue}/>}/>
                </Routes>
            }
        </BrowserRouter>
    );
}

export default App;

