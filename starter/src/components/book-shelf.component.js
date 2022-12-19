import BookItem from './book-item.component';

const BookShelf = ({ title, shelfBooks, fetchData }) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{title}</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {shelfBooks.map((book) => (
          <BookItem key={book.id} book={book} fetchData={fetchData} />
        ))}
      </ol>
    </div>
  </div>
);

export default BookShelf;
