import UserList from "../components/UserList";
import Login from "../components/Login";


export const privateRoutes = [
    {path: '/profile', component: UserList, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]