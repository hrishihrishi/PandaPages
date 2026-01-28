# Panda Pages - Online Library System

Welcome to **Panda Pages**, a modern and responsive online library management system built with React, Redux, and Tailwind CSS.

### Github repository link: https://github.com/hrishihrishi/PandaPages

## 🚀 Features Implemented

### 1. Home Page
- **Landing Experience**: A beautiful welcome message with a clean UI.
- **Book Categories**: Dynamic genre cards (Fiction, Sci-Fi, Finance, etc.) that allow users to browse books by category.
- **Popular Books**: A curated "Popular Books" section at the bottom displaying the most recently added or selected books using a reusable card component.
- **Navigation Bar**: A responsive navigation bar with active link styling for "Home", "Browse Books", and "Add Book".

### 2. Browse Books Page
- **Category Filtering**: Filter books instantly using a genre dropdown.
- **Search Functionality**: A real-time search bar that filters books by title.
- **View Details**: Every book card links to a dedicated details page.
- **Fresh Content**: Newly added books are automatically highlighted at the top of the list upon redirection.

### 3. Book Details Page
- **Dynamic Routing**: Uses route parameters to fetch and display specific book details from the Redux store.
- **Information Display**: Shows Book Title, Author, Genre, and Ratings.
- **Navigation**: Includes a "Back to Browse" link for a smooth user experience.

### 4. Add Book Page
- **Smart Form**: Search for books directly via the Open Library API with debounced suggestions.
- **Redux State Management**: Uses Redux Toolkit and Redux Persist to ensure your library data stays even after a page refresh.
- **Automated Workflow**: Upon adding a book, the system automatically redirects you to the Browse page and places your new book at the very top.

### 5. 404 Page (Page Not Found)
- **Error Handling**: A custom-designed error page that handles invalid routes or data entry errors.
- **Navigation Recovery**: Includes a quick link to return safely to the Home Page.
- **Clean Layout**: The error page focuses entirely on the error message, removing the standard header for a clear distinction.

### 6. Styling and UX
- **Tailwind CSS**: Leverages Tailwind for a premium, utility-first design.
- **Responsive Layout**: Grid and Flexbox layouts ensure 3 cards per row on desktops while remaining mobile-friendly.
- **Micro-interactions**: Hover effects, transitions, and active navigation states for a polished feel.

---

## 🛠️ Tech Stack
- **Framework**: Vite + React
- **State Management**: Redux Toolkit
- **Persistence**: Redux Persist (Local Storage)
- **Routing**: React Router DOM (v6+)
- **Styling**: Tailwind CSS

---

## 🏃 How to Run the Application

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hrishihrishi/PandaPages.git
   cd PandaPages
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Access the app**:
   Open your browser and navigate to `http://localhost:5173`

---

## ✍️ Code Quality
- **Comments**: Detailed comments have been added throughout the codebase (Redux store, Components, Pages) to explain logic and improve readability.
- **Structure**: Logical folder structure separating components, pages, and Redux logic.
- **Commits**: Followed a clean commit history with relevant descriptions.

---

> **Note on Requirements**: Some creative liberties were taken with category filtering using `useLocation` state to demonstrate cross-page data passing, while dynamic routing remains central to the Book Details view.