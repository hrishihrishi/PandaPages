import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function DisplayBooks({ books }) {
    return (
        <div>
            {
                books.map( book => {
                    return (
                        <div key={book.key}
                        className="max-w-sm rounded-2xl m-4 overflow-hidden shadow-lg border p-4"
                        >
                            <h2>Title: {book.title}</h2>
                            <p>Author: {book.author_name.join(',')}</p>
                            <p>Genre: {book.genre ? book.genre : 'N/A'}</p>
                            <p>Key: {book.key}</p>
                            <Link to={`/BrowseBooksPage${book.key}`}><button className="blue-btn">View More</button></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayBooks
