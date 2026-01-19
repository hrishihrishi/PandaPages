import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookManagerSlice from "./bookManagerSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'ppbooks',
    storage,
}

const rootReducer = combineReducers({
    bookManager: bookManagerSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const bookStore = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Necessary to avoid errors with redux-persist
    }),
});

export const persistor = persistStore(bookStore)

export default bookStore;