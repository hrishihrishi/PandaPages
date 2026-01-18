import React from 'react'

function BrowserBooksPage() {
    return (
        <div>
            <label>Browse books</label>
            <input type="text" placeholder="Search books" className='border-2 border-gray-200 rounded-md m-3 p-2'/>
            <button className='bg-blue-500 text-white p-2 rounded-md m-3'>Search</button>
        </div>
    )
}

export default BrowserBooksPage