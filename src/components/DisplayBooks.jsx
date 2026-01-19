import { useSelector } from "react-redux"

function DisplayBooks({ books }) {
    return (
        <div>
            {
                books.map( book => {
                    return (
                        <div key={book.key}
                        className="max-w-sm rounded overflow-hidden shadow-lg border p-4 bg-white"
                        >
                            <h2>Title: {book.title}</h2>
                            <p>Author: {book.author_name.join(',')}</p>
                            <p>Genre: {book.genre ? book.genre : 'N/A'}</p>
                            <p>Key: {book.key}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayBooks
