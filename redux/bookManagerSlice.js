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

        // getAllBooks: (state) => {
        //     return state.totalBooks
        // },

        editGenreById: (state, action) => {
            state.totalBooks.find(book => book.key === action.payload.key).genre = action.payload.genre
        },

        toggleFavStatusByBookId: (state, action) => {
        },
    }
})

export const { addBook, removeBookById, getBookById, getAllBooks, editGenreById, toggleFavStatusByBookId } = bookManagerSlice.actions
export default bookManagerSlice.reducer
