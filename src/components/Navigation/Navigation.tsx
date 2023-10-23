import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Navigation.module.css"

const Navigation = () => {
    return (
        <div className={s.Navigation}>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/Main'}>Main</NavLink>
            <NavLink to={'/login'}>Exit</NavLink>
        </div>
    );
};

export default Navigation;