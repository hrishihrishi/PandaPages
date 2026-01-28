import { useLocation } from "react-router-dom"
import DisplayBooks from "./components/DisplayBooks";
import { useSelector } from 'react-redux'


const BrowseByGenrePage = () => {

    const location = useLocation();
    const books = useSelector((state) => state.bookManager.totalBooks)

    // used location instead of dynamic linking to pass the genre to the BrowseByGenrePage
    const selectedGenre = location.state?.selectedGenre

    return (
        < DisplayBooks genre={selectedGenre} books={books} />
    )
}

export default BrowseByGenrePage;