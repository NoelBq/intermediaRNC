import { createSlice } from "@reduxjs/toolkit";

const initialState:any = []

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        SET_EVENTS: (state, { payload }) => {
            return [...state, ...payload]
        },
        PURGE: (state) => {
            state = [];
        }
    },
})

export const SET_EVENTS = eventsSlice.actions.SET_EVENTS
export default eventsSlice.reducer
