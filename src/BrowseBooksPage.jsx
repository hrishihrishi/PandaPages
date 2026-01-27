import React, { useState } from 'react'
import DisplayBooks from './components/DisplayBooks'
import { useSelector } from 'react-redux'

function BrowseBooksPage() {
    
    const [genre, setGenre] = useState('')
    const [starts_with, setStartsWith] = useState('')
    const books = useSelector((state) => state.bookManager.totalBooks)


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

            <DisplayBooks genre={genre} starts_with={starts_with} books={books}/>
        </div>
    )
}

export default BrowseBooksPage