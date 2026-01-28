import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookManagerSlice from "./bookManagerSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import persistStore from "redux-persist/es/persistStore";

// configuration to store data in browser local storage
const persistConfig = {
    key: 'ppbooks',
    storage,
}

// combine reducers to pass to store
const rootReducer = combineReducers({
    bookManager: bookManagerSlice,
})

// create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// create store
const bookStore = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Necessary to avoid errors with redux-persist
    }),
});

export const persistor = persistStore(bookStore)

export default bookStore;