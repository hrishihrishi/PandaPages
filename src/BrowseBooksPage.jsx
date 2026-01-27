import React, { useState } from 'react'
import DisplayBooks from './components/DisplayBooks'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function BrowseBooksPage() {

    const [genre, setGenre] = useState('')
    const [starts_with, setStartsWith] = useState('')
    const books = useSelector((state) => state.bookManager.totalBooks)
    let filteredBooks = books;
    const location = useLocation();

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
                <input onChange={(e) => setStartsWith(e.target.value)} type="text" placeholder="Search books" className='input' />
                <button onClick={() => handleSearch()} className='blue-btn'>Search</button>
            </div>
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

            
            {first_book !=='' && <DisplayBooks books={first_book} />}
            <hr className='p-5 mt-4'/>
            {
            filteredBooks.length === 0 ? <h1>No books available with these keywords !</h1> : 
            <DisplayBooks genre={genre} books={filteredBooks} />
            }

        </div>
    )
}

export default BrowseBooksPage