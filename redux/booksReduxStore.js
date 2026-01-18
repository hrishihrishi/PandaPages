import { configureStore } from "@reduxjs/toolkit";
import bookManagerSlice from "./bookManagerSlice";

const bookStore = configureStore({
    reducer: {
        bookManager: bookManagerSlice
    }
});

export default bookStore;