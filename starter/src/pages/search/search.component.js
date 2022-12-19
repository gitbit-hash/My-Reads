import { useEffect, useState } from 'react';

import BookItem from '../../components/book-item.component';
import SearchBar from '../../components/search-bar.component';

import { search } from '../../BooksAPI';

const Search = ({ fetchData }) => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue.length < 1) {
      return;
    }

    const searchBooks = async () => {
      const res = await search(inputValue);

      setSearchQuery(res);
    };

    searchBooks();
  }, [inputValue]);

  console.log(searchQuery);

  const handleInputChange = (e) => {
    const trimmedInput = e.target.value.trim();

    if (trimmedInput.length < 1) {
      setSearchQuery([]);
    }

    setInputValue(trimmedInput);
  };

  return (
    <div className='search-books'>
      <SearchBar handleInputChange={handleInputChange} />
      <div className='search-books-results'>
        <ol className='books-grid'>
          {!Array.isArray(searchQuery) ? (
            <div className='error-message'>
              No books have been found, try another search term.
            </div>
          ) : (
            searchQuery.map((book) => (
              <BookItem key={book.id} book={book} fetchData={fetchData} />
            ))
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;
