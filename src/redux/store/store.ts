import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {profileReducer} from "../profile/profileSlice";
import {loginReducer} from "../login/loginSlice";
import {mainReducer} from "../main/mainSlice";

const rootReducer = combineReducers({
    profileReducer,
    loginReducer,
    mainReducer
})

export const setupStore = () =>{
    return configureStore({
         reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
