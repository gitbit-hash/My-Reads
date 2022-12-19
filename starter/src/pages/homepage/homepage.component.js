import { useState, useEffect, useCallback } from 'react';

import { getAll } from '../../BooksAPI';

import BooKShelf from '../../components/book-shelf.component';

const HomePage = () => {
  const [allBooks, setAllBooks] = useState([]);

  let fetchData = useCallback(async () => {
    const res = await getAll();
    setAllBooks(res);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // useEffect(() => {
  //   const getAllBooks = async () => {
  //     const res = await getAll();
  //     console.log(res);
  //     setAllBooks(res);
  //   };
  //   getAllBooks();
  // }, []);

  if (allBooks.length < 1) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className='list-books-content'>
      <div>
        <BooKShelf
          title='Currently Reading'
          shelfBooks={allBooks.filter(
            (book) => book.shelf === 'currentlyReading'
          )}
          fetchData={fetchData}
        />
        <BooKShelf
          title='Want To Read'
          shelfBooks={allBooks.filter((book) => book.shelf === 'wantToRead')}
          fetchData={fetchData}
        />
        <BooKShelf
          title='Read'
          shelfBooks={allBooks.filter((book) => book.shelf === 'read')}
          fetchData={fetchData}
        />
      </div>
    </div>
  );
};

export default HomePage;
