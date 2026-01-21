import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function BookDetailsPage() {

    const params = useParams()
    console.log(params)

    const fullKey = `/${params["*"]}`;
    console.log(fullKey)

    const book = useSelector(state => state.bookManager.totalBooks.find(book => book.key === fullKey))
    console.log(book)

    return (
        <div className='flex flex-col justify-center items-center h-screen bg-yellow-200'>
            <div className='bd justify-center items-center flex flex-col p-4 bg-blue-200 rounded-lg shadow-2xl gap-6'>
                <h1 className='text-4xl underline font-bold italic mb-4'>BookDetailsPage</h1>
            {
                book ? <h2>Book found its name is {book.title}</h2> : <h2>Book not found ! </h2> 
                
            }
                <p >Title: {book.title}</p>
                <p >Author: {book.author_name.join(',')}</p>
                <p >Genre: {book.genre ? book.genre : 'N/A'}</p>
                <p >Key: {book.key}</p>
            </div>
        </div>
    )
}

export default BookDetailsPage