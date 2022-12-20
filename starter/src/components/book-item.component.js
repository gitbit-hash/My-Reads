import { Link } from 'react-router-dom';

import { update } from '../BooksAPI';

const BookItem = ({ book, fetchData }) => {
  const handleChange = async (e) => {
    if (book.shelf === e.target.value) return;

    await update(book, e.target.value);

    fetchData();
  };

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <Link to={`/${book.id}`}>
            <div
              className='book-cover'
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks?.thumbnail})`,
              }}
            ></div>
          </Link>
          <div className='book-shelf-changer'>
            <select defaultValue={'DEFAULT'} onChange={handleChange}>
              <option value='DEFAULT' disabled>
                Move to...
              </option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        {book.authors && (
          <div className='book-authors'>{book.authors?.join(', ')}</div>
        )}
      </div>
    </li>
  );
};

export default BookItem;
