import { useState, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Search from './pages/search/search.component';

import { getAll } from './BooksAPI';

import './App.css';

function App() {
  const [allBooks, setAllBooks] = useState([]);

  let fetchData = useCallback(async () => {
    const res = await getAll();
    setAllBooks(res);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage allBooks={allBooks} fetchData={fetchData} />}
      />
      <Route path='/search' element={<Search fetchData={fetchData} />} />
    </Routes>
  );
}

export default App;
