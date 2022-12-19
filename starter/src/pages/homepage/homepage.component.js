import { Link } from 'react-router-dom';

import BooKShelf from '../../components/book-shelf.component';

const HomePage = ({ allBooks, fetchData }) => {
  if (allBooks.length < 1) {
    return <div className='loading-message'>Loading...</div>;
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
        <div className='open-search'>
          <Link to={'/search'}>Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
