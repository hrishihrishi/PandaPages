import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DisplayBooks from './components/DisplayBooks'

function HomePage() {
    const genres = ['Fiction',
        'Personality',
        'Finance',
        'Science',
        'Mysticism',
        'Comedy',
        'Love',
        'Adventure']

    const [genre, setGenre] = useState('')
    const [starts_with, setStartsWith] = useState('')
    const books = useSelector((state) => state.bookManager.totalBooks)
    let filteredBooks = books;

    if (genre!=='') filteredBooks = books.filter(book => book.genre === genre);
    if (starts_with!=='') filteredBooks = books.filter(book => book.title?.toLowerCase().includes(starts_with.toLowerCase()));

    const handleClick = (selectedGenre) => {
        setGenre(selectedGenre)
    }
    return (
        <div>
            <h1>HomePage</h1>
            {
                genres.map( (genre) =>
                    <div key={genre} onClick={() => handleClick(genre)} className='p-5 bg-red-100 rounded-xl m-2 inline-block text-amber-700 italic text-3xl font-semibold cursor-pointer shadow-lg hover:bg-amber-200 transition-all duration-300 ease-in-out'>
                        <h2>{genre}</h2>
                    </div> )
            }
            <DisplayBooks genre={genre} starts_with={starts_with} books={filteredBooks}/>
        </div>
    )
}

export default HomePage