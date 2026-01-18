import { createSlice } from "@reduxjs/toolkit";

const bookManagerSlice = createSlice({
    name: "bookManager",
    initialState: {
        totalBooks: [],
        favoriteBooks: [],
    },
    reducers: {
        addBook: (state, action) => {
            state.totalBooks.push(action.payload)
        },

        // payload will be the book id
        removeBookById: (state, action) => {
        },

        getBookById: (state, action) => {
        },

        getAllBooks: (state) => {
        },

        editGenreById: (state, action) => {
        },

        toggleFavStatusByBookId: (state, action) => {
        },
    }
})

export const { addBook, removeBookById, getBookById, getAllBooks, editGenreById, toggleFavStatusByBookId } = bookManagerSlice.actions
export default bookManagerSlice.reducer
