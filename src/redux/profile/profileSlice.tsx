import {createSlice} from '@reduxjs/toolkit';

interface ProfileState {
    name: string,
    username: string,
    email: string
    cityList: any[]
}

const initialState: ProfileState = {
    name: "Aliaksandr",
    username: "Shlapik",
    email: "lolxax52@gmail.com",
    cityList:[
        {value: "Lida"},
        {value: "Mak.by"},
        {value: "KFC"},
        {value: "Minsk"},
        {value: "v mame"},
    ]
};

const profileSlice = createSlice({
        name: 'profile',
        initialState,
        reducers: {
            changeName(state, action) {
                state.name = action.payload
            },
            changeUserName(state, action) {
                state.username = action.payload
            },
            changeEmail(state, action) {
                state.email = action.payload
            },
        },
    })
;

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
