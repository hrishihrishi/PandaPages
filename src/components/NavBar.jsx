import React from 'react'
import './../index.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
        <div className='flex justify-around space-x-5 bg-amber-500'>
            <h1>welcome to panda pages</h1>
            <ul className='flex space-x-5'>
                <li><Link to='./../BrowserBooksPage'>Browser Books</Link></li>
                <li><Link to='./../AddBookPage'> Add Book</Link></li>
                <li><Link to='/'> Profile </Link></li>
                <li><Link to='/'> Logout </Link></li>
            </ul>
        </div>
        </nav>
    )
}

export default NavBar