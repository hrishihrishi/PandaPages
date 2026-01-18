import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import BrowserBooksPage from './BrowserBooksPage.jsx'
import AddBookPage from './AddBookPage.jsx'
import { Provider } from 'react-redux'
import bookStore from '../redux/booksReduxStore.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={bookStore}>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/BrowserBooksPage" element={<BrowserBooksPage />} />
          <Route path="/AddBookPage" element={<AddBookPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
