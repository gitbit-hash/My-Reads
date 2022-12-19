import { Link } from 'react-router-dom';

const SearchBar = ({ handleInputChange }) => (
  <div className='search-books-bar'>
    <Link className='close-search' to={'/'}>
      Close
    </Link>
    <div className='search-books-input-wrapper'>
      <input
        type='text'
        placeholder='Search by title, author, or ISBN'
        onChange={handleInputChange}
      />
    </div>
  </div>
);

export default SearchBar;
