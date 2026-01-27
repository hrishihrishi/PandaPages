import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DisplayBooks from './components/DisplayBooks'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const genres = ['Fiction',
        'Personality',
        'Finance',
        'Science',
        'Mysticism',
        'Comedy',
        'Love',
        'Adventure']


    const books = useSelector((state) => state.bookManager.totalBooks)
    const navigate = useNavigate();

    const handleClick = (selectedGenre) => {
        navigate('/BrowseByGenrePage', { state: { selectedGenre: selectedGenre } })
    }


    return (
        <div>
            <h1>HomePage</h1>
            {/* <button onClick={handleReset} className='blue-btn'>Reset</button> */}

            {
                genres.map((genre) =>
                    <div key={genre} onClick={() => handleClick(genre)} className='p-5 bg-red-100 rounded-xl m-2 inline-block text-amber-700 italic text-3xl font-semibold cursor-pointer shadow-lg hover:bg-amber-200 transition-all duration-300 ease-in-out'>
                        <h2>{genre}</h2>
                    </div>)
            }
        </div>
    )
}

export default HomePage