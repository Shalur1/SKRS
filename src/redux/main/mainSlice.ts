import {createSlice} from "@reduxjs/toolkit";

interface massage {
    id: number
    text: string
}

interface ticket {
    id: number
    name: string,
    massages: massage[]
}

interface mainState {
    tickets: ticket[]
}

const initialState: mainState = {
    tickets: [
        {
            id: 1,
            name: "HEEELP",
            massages: [
                {
                    id: 1,
                    text: "YA TUPOY"
                }
            ]
        },
        {
            id: 2,
            name: "LUN",
            massages: [
                {
                    id: 1,
                    text: "YA UMNIY"
                },
                {
                    id: 2,
                    text: "SOSSAT'"
                }
            ]
        }
    ]
};

const mainSlice = createSlice({
        name: 'main',
        initialState,
        reducers: {
            addTicket(state, action) {
                state.tickets.push(action.payload)
            }
        },
    })
;

export const mainActions = mainSlice.actions;
export const mainReducer = mainSlice.reducer;