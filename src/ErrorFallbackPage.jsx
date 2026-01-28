import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function ErrorFallbackPage() {
    const err = useRouteError();
    console.log(err)

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center p-10 bg-red-100 rounded-2xl max-w-4xl'>
                <h1 className='text-2xl font-bold'>Error !</h1>
                <h2 className='text-lg'>The path is not defined or data is entered wrongly..</h2>
                <br />
                <h3 className='text-2xl font-bold'>{err.status}</h3>

                <h3 className='text-lg'>Error details:</h3>
                <h3 className='text-lg'>{err.error.stack}</h3>
            </div>

            <Link to='/'><button className='blue-btn'>Go back to home page</button></Link>

        </div>
    )
}

export default ErrorFallbackPage;