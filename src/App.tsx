import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./components/Login/Login";
import UserList from "./components/UserList/UserList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useAppSelector} from "./hooks/redux";
import Navigation from "./components/Navigation/Navigation";

function App() {

    let uInfo = useAppSelector(state => state.profileReducer)

    let [isAuth, setIsAuth] = useState<boolean>(false)

    let setIsAuthTrue = function () {
        setIsAuth(true)
    }

    return (
        <BrowserRouter>
            {isAuth ?
                <div>
                    <Navigation/>
                    <Routes>
                        <Route path={"/profile"} element={<UserList name={uInfo.name} username={uInfo.username}
                                                                    email={uInfo.email}/>}/>
                    </Routes>
                </div>
                :
                <Routes>
                    <Route path={"/login"} element={<Login setIsAuthTrue={setIsAuthTrue}/>}/>
                </Routes>
            }
        </BrowserRouter>
    );
}

export default App;

