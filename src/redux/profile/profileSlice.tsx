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
    cityList: [
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
            setProfileInfo(state, action) {
                state.email = action.payload.email
                state.name = action.payload.name
                state.username = action.payload.username
            }
        },
    })
;

export const {
    setProfileInfo
} = profileSlice.actions;

export const SetProfileInfo = (obj: object) => (dispatch: any) => {
    dispatch(setProfileInfo(obj))
};

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
