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
        deleteBookById: (state, action) => {
            state.totalBooks = state.totalBooks.filter(book => book.key !== action.payload)
        },

        editGenreById: (state, action) => {
            state.totalBooks.find(book => book.key === action.payload.key).genre = action.payload.genre
        },

        toggleFavStatusByBookId: (state, action) => {
        },
    }
})

export const { addBook, deleteBookById, getBookById, getAllBooks, editGenreById, toggleFavStatusByBookId } = bookManagerSlice.actions
export default bookManagerSlice.reducer
