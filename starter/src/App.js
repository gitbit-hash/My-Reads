import { useState } from 'react';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  return (
    <div className='app'>
      {showSearchPage ? (
        <div className='search-books'>
          <div className='search-books-bar'>
            <a
              className='close-search'
              onClick={() => setShowSearchPage(!showSearchPage)}
            >
              Close
            </a>
            <div className='search-books-input-wrapper'>
              <input
                type='text'
                placeholder='Search by title, author, or ISBN'
              />
            </div>
          </div>
          <div className='search-books-results'>
            <ol className='books-grid'></ol>
          </div>
        </div>
      ) : (
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <HomePage />
          <div className='open-search'>
            <a onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
