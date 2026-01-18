import { useState, useEffect } from "react";

function AddBookPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState({ title: "", genre: "" });

  useEffect(() => {
    // Only search if the user has typed at least 3 characters
    if (query.length < 3) {
      setResults([]);
      return;
    }

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

  const handleSelect = (book) => {
    console.log(book)
    setSelectedBook({
      title: book.title,
      genre: book.subject ? book.subject[0] : "Unknown" // Take first genre/subject
    });
    setResults([]); // Clear list
    setQuery(book.title); // Fill input
  };

  return (
    <div style={{ padding: '20px' }}>
      <label>Search Book Name:</label>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="type some characters" className="border border-gray-700 rounded m-4 p-2" />

      {/* The Suggestion Dropdown */}
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
      <h3 className="m-2">Selected Book Details</h3>
      <p>Title: {selectedBook.title}</p>
      <p>Genre: {selectedBook.genre}</p>
    </div>
  );
}

export default AddBookPage