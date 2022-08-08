import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userAuthSlice";
import charactersReducer from "./characters";
import eventReducer from "./events";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    userAuth: userReducer,
    characters: charactersReducer,
    events: eventReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)
