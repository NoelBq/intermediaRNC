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
            return [];
        }
    },
})

export const SET_CHARACTERS = charactersSlice.actions.SET_CHARACTERS
export const purgeCharacters = charactersSlice.actions.PURGE
export default charactersSlice.reducer
