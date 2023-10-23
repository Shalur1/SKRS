import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
    name: string,
    password: string,
    checked: boolean
}

const initialState: LoginState= {
    name: "",
    password: "",
    checked: false
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

    },
});

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
