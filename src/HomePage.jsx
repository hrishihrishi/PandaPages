import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DisplayBooks from './components/DisplayBooks'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    // genres
    const genres = ['Fiction',
        'Personality',
        'Finance',
        'Science',
        'Mysticism',
        'Comedy',
        'Love',
        'Adventure'
    ]

    // colors for genres (random)
    const colors = [
        'bg-red-100',
        'bg-blue-100',
        'bg-green-100',
        'bg-yellow-100',
        'bg-purple-100',
        'bg-pink-100',
        'bg-indigo-100',
        'bg-orange-100'
    ];

    const books = useSelector((state) => state.bookManager.totalBooks)
    const popular_books = books.slice(-5);
    const navigate = useNavigate();

    // function to navigate to BrowseByGenrePage
    const handleClick = (selectedGenre) => {
        navigate('/BrowseByGenrePage', { state: { selectedGenre: selectedGenre } })
    }


    return (
        <div className='h-screen'>

            {/* Welcome message */}
            <h1 className='font-extrabold text-5xl italic text-blue-500 p-5 justify-center flex'>Welocome to Panda Pages !</h1>
            <p className='text-xl font-semibold italic px-10 mb-6 justify-center flex'>Choose a category / genre of the books you want to read...!</p>

            {/* Genre cards (rendered via map function) */}
            <div className='p-5 px-10'>
                {
                    genres.map((genre, index) =>
                        <div key={genre} onClick={() => handleClick(genre)}
                            className={`p-8 ${colors[index % colors.length]} rounded-xl m-3 inline-block text-amber-700 italic text-4xl font-semibold cursor-pointer shadow-md hover:shadow-2xl duration-200 py-9`}>
                            <h2>{genre}</h2>
                        </div>)
                }
            </div>

            {/* Popular Books display */}
            <div className='bg-pink-50 z-0'>
                <h1 className='text-4xl font-bold italic text-pink-400 justify-center items-center flex p-10'>Popular Books !</h1>
                <DisplayBooks books={popular_books} />
            </div>
        </div>
    )
}

export default HomePage