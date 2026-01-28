import React, { useState } from 'react'
import DisplayBooks from './components/DisplayBooks'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

function BrowseBooksPage() {
    // local states
    const [genre, setGenre] = useState('')
    const [starts_with, setStartsWith] = useState('')
    const books = useSelector((state) => state.bookManager.totalBooks)

    // initial filtered books
    let filteredBooks = books;
    const location = useLocation();

    // this book will be rendered first (if any). Indicated newly added book
    const first_book = location.state?.first_book || '';

    // Search funtionality.
    if (genre !== '') filteredBooks = books.filter(book => book.genre === genre);
    if (starts_with !== '') filteredBooks = books.filter(book => book.title?.toLowerCase().includes(starts_with.toLowerCase()));

    const handleSearch = () => {
        console.log(starts_with)
    }

    return (
        <div className='p-5 h-screen'>
            <div className='flex flex-row justify-center items-centre'>
                {/* Search bar */}
                <input onChange={(e) => setStartsWith(e.target.value)} type="text" placeholder="Search books" className='input' />
                <button onClick={() => handleSearch()} className='blue-btn'>Search</button>
            </div>

            {/* Genre selector dropdown */}
            <select onChange={(e) => setGenre(e.target.value)} className="rounded-xl p-1.5 w-1/6 bg-amber-100">
                <option value="">Select Genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Personality">Personality</option>
                <option value="Finance">Finance</option>
                <option value="Science">Science</option>
                <option value="Mysticism">Mysticism</option>
                <option value="Comedy">Comedy</option>
                <option value="Love">Love</option>
                <option value="Adventure">Adventure</option>
            </select>

            {/* First book to display newly added book */}
            {first_book !== '' && <DisplayBooks books={first_book} />}

            {/* Filtered books (filter could be genre or search or no-filter too)*/}
            {
                filteredBooks.length === 0 ?
                    <div className='flex flex-col rounded-2xl p-5 justify-center items-center'>
                        <h1 className='text-2xl italic bg-pink-200 p-2 mb-7'> Oops !! You don't have books available with these keywords !</h1>
                        <Link to='/AddBookPage'><button className='blue-btn'>Add new book</button></Link>
                    </div> :
                    <DisplayBooks genre={genre} books={filteredBooks} />
            }
        </div>
    )
}

export default BrowseBooksPage