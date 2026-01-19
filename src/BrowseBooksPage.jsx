import React from 'react'
import GetBooks from './components/GetBooks'

function BrowseBooksPage() {
    const handleSearch = (e) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <label>Browse books</label>
            <input onChange={() => handleSearch()}
            type="text" placeholder="Search books" className='border-2 border-gray-200 rounded-md m-3 p-2'/>
            <button onClick={() => handleSearch()}
            className='blue-btn'>Search</button>

            <GetBooks/>
        </div>      
    )
}

export default BrowseBooksPage