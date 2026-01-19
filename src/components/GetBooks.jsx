import { useSelector } from "react-redux"
import DisplayBooks from "./DisplayBooks"


function GetBooks() {
    const books = useSelector((state) => state.bookManager.totalBooks)

    return (
        <div>
            <DisplayBooks books={books} />
        </div>
    )
}
export default GetBooks