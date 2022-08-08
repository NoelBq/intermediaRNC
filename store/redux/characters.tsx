import { createSlice } from "@reduxjs/toolkit";


const initialState:any = []

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        SET_CHARACTERS: (state, { payload }) => {
            return [...state, ...payload]
        },
        PURGE: (state) => {
            state = [];
        }
    },
})

export const SET_CHARACTERS = charactersSlice.actions.SET_CHARACTERS
export default charactersSlice.reducer
