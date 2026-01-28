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
import PageNotFound from './PageNotFound.jsx';


// 1. Define routes as an array of objects
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <HomePage />, errorElement: <PageNotFound /> },
      { path: "HomePage", element: <HomePage />, errorElement: <PageNotFound /> },
      { path: "BrowseBooksPage", element: <BrowseBooksPage />, errorElement: <PageNotFound /> },
      { path: "BrowseBooksPage*", element: <BookDetailsPage />, errorElement: <PageNotFound /> },
      { path: "AddBookPage", element: <AddBookPage />, errorElement: <PageNotFound /> },
      { path: "BrowseByGenrePage", element: <BrowseByGenrePage />, errorElement: <PageNotFound /> },
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