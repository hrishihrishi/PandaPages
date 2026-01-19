import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import BrowseBooksPage from './BrowseBooksPage.jsx'
import AddBookPage from './AddBookPage.jsx'
import { Provider } from 'react-redux'
import bookStore from '../redux/booksReduxStore.js'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '../redux/booksReduxStore.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={bookStore}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <Routes>
            <Route path="/BrowseBooksPage" element={<BrowseBooksPage />} />
            <Route path="/AddBookPage" element={<AddBookPage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
