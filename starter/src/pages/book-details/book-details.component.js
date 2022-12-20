import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { get } from '../../BooksAPI';

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getBook = async () => {
      const res = await get(bookId);
      setBook(res);
    };
    getBook();
  }, [bookId]);

  console.log(book);

  if (Object.keys(book).length === 0) {
    return <div className='loading-message'>Loading...</div>;
  }

  return (
    <div className='book-page'>
      <button className='back-button' onClick={() => navigate('/')}>
        Back to home page
      </button>
      <div className='book-main'>
        <div className='book-thumbnail'>
          <img
            alt={book.title}
            className='book-img'
            src={book.imageLinks?.thumbnail}
          ></img>
        </div>
        <div className='book-description'>
          <h1>{book.title} </h1>
          <span className='publish-date'>
            Published at {book.publishedDate}
          </span>
          <span className='book-authors'>by: {book.authors?.join(', ')}</span>
          <p className='book-summary'>{book.description}</p>
        </div>
      </div>
      <div className='book-details'>
        <h1 className='book-details-title'>Book details</h1>
        <ul>
          <li>
            <span className='li-title'>Page Count: </span>
            <span>{book.pageCount}</span>
          </li>
          <li>
            <span className='li-title'>Language: </span>
            <span>{book.language.toUpperCase()}</span>
          </li>
          <li>
            <span className='li-title'>Industry Identifiers: </span>
            <ul>
              {book.industryIdentifiers.map((ident) => (
                <li key={ident.id}>
                  <span className='li-title'>{ident.type}: </span>
                  <span>{ident.identifier}</span>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <span className='li-title'>Info Link: </span>
            <span>
              <a href={book.infoLink} target='_blank' rel='noreferrer'>
                Link
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookDetails;
