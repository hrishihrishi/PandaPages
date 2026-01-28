import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteBookById } from "../../redux/bookManagerSlice"

function DisplayBooks({ genre = '', books }) {
    const dispatch = useDispatch();

    // filter books by genre if genre is not empty
    if (genre !== '') books = books.filter(book => book.genre === genre);

    return (
        <div className="flex flex-wrap justify-center">
            {
                books.map(book => {
                    return (
                        <div key={book.key} className="w-full sm:w-[45%] lg:w-[30%] rounded-2xl m-3 overflow-hidden shadow-lg border-gray-400 border-2 p-4 flex flex-col bg-white" >
                            <h2 className="sp italic">Title: {book.title}</h2>
                            <p className="sp italic">Genre: {book.genre ? book.genre : 'N/A'}</p>

                            {/* view details button, that navigates to BookDetailsPage */}
                            <Link to={`/BrowseBooksPage${book.key}`}><button className="blue-btn">View Details</button></Link>
                            {/* delete book button, that dispatches deleteBookById action */}
                            <button className="blue-btn w-30" onClick={() => dispatch(deleteBookById(book.key))}>Delete Book</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayBooks
