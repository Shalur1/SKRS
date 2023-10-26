import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./components/Login/Login";
import UserList from "./components/UserList/UserList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Tickets from "./components/Main/Tickets/Tickets";
import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {

    let [isAuth, setIsAuth] = useState<boolean>(false)
    const {getInfo, setInfo} = useLocalStorage()

    useEffect(()=>{
        setInfo("tickets", [])
    })

    let setIsAuthTrue = function () {
        setIsAuth(true)
    }

    return (
        <BrowserRouter>
            {isAuth ?
                <div>
                    <Navigation/>
                    <Routes>
                        <Route path={"/profile"} element={<UserList/>}/>
                        <Route path={"/main"} element={<Main/>}/>
                        <Route path={"/tickets"} element={<Tickets/>}/>
                    </Routes>
                </div>
                :
                <Routes>
                    <Route path={"/login" || ""} element={<Login setIsAuthTrue={setIsAuthTrue}/>}/>
                </Routes>
            }
        </BrowserRouter>
    );
}

export default App;

