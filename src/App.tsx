import React, {useState} from 'react';
import './App.css';
import Login from "./components/Login";
import UserList from "./components/UserList";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

    let [isAuth, setIsAuth] = useState<boolean>(false)

    let setIsAuthTrue = function () {
        setIsAuth(true)
    }

    return (
        <BrowserRouter>
            {isAuth ?
                <Routes>
                    <Route path={"/profile"} element={<UserList id={1} name={"Aliaksandr"} username={"Shlapik"}
                                                         email={"lolxax52@gmail.com"}/>}/>

                </Routes> :
                <Routes>
                    <Route path={"/login"} element={<Login setIsAuthTrue={setIsAuthTrue}/>}/>
                </Routes>
            }
        </BrowserRouter>
    );
}

export default App;

