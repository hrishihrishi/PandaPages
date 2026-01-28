import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBook, editGenreById } from "../redux/bookManagerSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddBookPage() {
  // local states
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState({ title: "", genre: "" });
  const [genre, setGenre] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.bookManager.totalBooks);

  // useEffect(() => {
  //   console.log('books updated', books)
  // }, [books])

  useEffect(() => {
    // Only search if the user has typed at least 3 characters
    if (query.length < 3) {
      setResults([]);
      return;
    }

    // fetch top search results via API
    const timer = setTimeout(async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=5`);
        const data = await response.json();
        setResults(data.docs);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }, 500); // 500ms Debounce

    return () => clearTimeout(timer); // Cleanup timer if user types again
  }, [query]);

  // sets book to selectedBook. & displays books details!
  const handleSelect = (book) => {
    setSelectedBook({
      key: book.key,
      title: book.title,
      author_name: book.author_name,
      first_publish_year: book.first_publish_year,
      genre: book.subject ? book.subject[0] : "Unknown" // Take first genre/subject
    });
    setResults([]); // Clear list
    setQuery(book.title); // Fill input
  };

  // dispatch action to add book to the redux slice
  const handleAddBook = () => {
    // append/replace genre to selectedBook
    const updatedBook = { ...selectedBook, genre: genre }
    setSelectedBook(updatedBook)
    dispatch(addBook(updatedBook))

    // reset form
    setQuery('')
    setGenre('')
    setResults([])
    setSelectedBook({ title: "", genre: "" })

    // navigate to BrowseBooksPage & pass the updated book as first book
    navigate('/BrowseBooksPage', {state: {first_book: [updatedBook]}})
  }

  return (
    <div className="absolute top-1/6 left-1/4">
      <label>Search Book Name:</label>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="type atleast 3 characters for suggetions . . ." className="input" />

      <p className="text-gray-400 italic mb-2">Note: This search bar fetches data directly from API so wait 5 seconds for suggestions,  also check your intenrnet connection</p>

      {/* The Dropdown that onClick triggers handleSelect*/}
      {results.length > 0 && (
        <ul style={{ border: '1px solid #ccc', listStyle: 'none', padding: 10 }}>
          {results.map((book) => (
            <li
              key={book.key}
              onClick={() => handleSelect(book)}
              style={{ cursor: 'pointer', padding: '5px' }}
            >
              {book.title} ({book.first_publish_year})
            </li>
          ))}
        </ul>
      )}

      <hr />
      {/* Selected Book Details */}
      <p className="sp mt-5 underline">Selected Book Details:</p>
      <p className="sp" >Title: {selectedBook.title}</p>
      <p className="sp">Author: {selectedBook.author_name && selectedBook.author_name.join(', ')}</p>
      <p className="sp">Genre:
        <select defaultValue={selectedBook.genre} onChange={(e) => setGenre(e.target.value)} className="rounded-xl p-1.5 w-1/6 bg-amber-100">
          <option value="">Select Genre</option>
          <option value="Fiction">Fiction</option>
          <option value="Personality">Personality</option>
          <option value="Finance">Finance</option>
          <option value="Science">Science</option>
          <option value="Mysticism">Mysticism</option>
          <option value="Comedy">Comedy</option>
          <option value="Love">Love</option>
          <option value="Adventure">Adventure</option>
        </select>
      </p>

      <button onClick={() => handleAddBook()} className="blue-btn">Add Book</button>

    </div>
  );
}

export default AddBookPage