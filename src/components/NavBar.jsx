import React from 'react'
import './../index.css'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='p-5'>
            <div className='flex justify-between text-white py-3 px-10 text-2xl font-semibold italic bg-blue-400 rounded-2xl'>

                <h1 className='text-3xl font-extrabold'>Panda Pages</h1>
                <ul className='flex space-x-5 gap-3.5'>
                    <li className='h'>
                        <NavLink to='/HomePage' className={({ isActive }) => isActive ? 'a' : ''}>Home</NavLink>
                    </li>
                    <li className='h'>
                        <NavLink to='/BrowseBooksPage' className={({ isActive }) => isActive ? 'a' : ''}>Browser Books</NavLink>
                    </li>
                    <li className='h'>
                        <NavLink to='/AddBookPage' className={({ isActive }) => isActive ? 'a' : ''}> Add Book</NavLink>
                    </li>
                    {/* <li><Link to='/'> Profile </Link></li>
                <li><Link to='/'> Logout </Link></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar