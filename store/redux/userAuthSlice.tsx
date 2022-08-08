import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";


const initialState = {
    token: '',
}

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_AUTHENTICATED: (state, { payload }) => {
            state.token = payload
        },
        
        LOGOUT: (state) => {
            state.token = ''
        }
    },
})

export const authenticateUser = userSlice.actions.SET_AUTHENTICATED
export const logout = userSlice.actions.LOGOUT
// export const logout = userSlice.actions.LOGOUT
export default userSlice.reducer
