import React from 'react'

function HomePage() {
    const genres = ['Fiction',
        'Personality',
        'Finance',
        'Science',
        'Mysticism',
        'Comedy',
        'Love',
        'Adventure']
    return (
        <div>
            <h1>HomePage</h1>
            {
                genres.map((genre) =>
                    <div key={genre} className='p-5 bg-red-100 rounded-xl m-2 inline-block text-amber-700 italic text-3xl font-semibold cursor-pointer shadow-lg hover:bg-amber-200 transition-all duration-300 ease-in-out'
                    
                    >
                        <h2>{genre}</h2>
                    </div>

                )
            }
        </div>
    )
}

export default HomePage