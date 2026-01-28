/* src/main.jsx */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import BrowseBooksPage from './BrowseBooksPage.jsx';
import AddBookPage from './AddBookPage.jsx';
import { Provider } from 'react-redux';
import bookStore from '../redux/booksReduxStore.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../redux/booksReduxStore.js';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import BookDetailsPage from './BookDetailsPage.jsx';
import HomePage from './HomePage.jsx';
import BrowseByGenrePage from './BrowseByGenrePage.jsx';
import ErrorFallbackPage from './ErrorFallbackPage.jsx';


// 1. Define routes as an array of objects
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorFallbackPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "HomePage", element: <HomePage /> },
      { path: "BrowseBooksPage", element: <BrowseBooksPage /> },
      { path: "BrowseBooksPage*", element: <BookDetailsPage /> },
      { path: "AddBookPage", element: <AddBookPage /> },
      { path: "BrowseByGenrePage", element: <BrowseByGenrePage /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={bookStore}>
      <PersistGate loading={null} persistor={persistor}>
        {/* 2. Use RouterProvider instead of BrowserRouter + Routes */}
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)