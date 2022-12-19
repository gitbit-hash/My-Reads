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
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className='book-shelf-changer'>
            <select onChange={handleChange}>
              <option value='none' disabled>
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
        <div className='book-authors'>{book.authors.join(', ')}</div>
      </div>
    </li>
  );
};

export default BookItem;
