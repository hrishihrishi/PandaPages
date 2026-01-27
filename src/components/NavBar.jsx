import React from 'react'
import './../index.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
        <div className='flex justify-between text-amber-600 py-3 px-15 text-2xl font-bold italic bg-amber-100 border-amber-600 border-double border-5'>

            <h1 className='text-3xl'>Panda Pages</h1>
            <ul className='flex space-x-5 gap-3.5'>
                <li><Link to='./../HomePage'>Home</Link></li>
                <li><Link to='./../BrowseBooksPage'>Browser Books</Link></li>
                <li><Link to='./../AddBookPage'> Add Book</Link></li>
                {/* <li><Link to='/'> Profile </Link></li>
                <li><Link to='/'> Logout </Link></li> */}
            </ul>
        </div>
        </nav>
    )
}

export default NavBar