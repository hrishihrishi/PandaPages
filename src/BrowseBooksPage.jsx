import React from 'react'

function BrowseBooksPage() {
    const handleSearch = (e) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <label>Browse books</label>
            <input onChange={() => handleSearch()}
            type="text" placeholder="Search books" className='border-2 border-gray-200 rounded-md m-3 p-2'/>
            <button className='bg-blue-500 text-white p-2 rounded-md m-3'>Search</button>
        </div>      
    )
}

export default BrowseBooksPage