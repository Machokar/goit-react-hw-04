import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { SearchBars } from './SearchBar/SearchBar';
import { ImageGal } from './ImageGallery/ImageGallery';
import { Loader } from './Loaderbox/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { fetchArticle } from './api';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [endlist, setEndlist] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onsearch = async query => {
    setQuery(query);
    setPictures([]);
  };
  const handelloadmore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
        setLoading(true);
        const { results, total_pages } = await fetchArticle(query, page);
        setPictures(prevPictures => [...prevPictures, ...results]);
        setEndlist(total_pages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);
  return (
    <>
      <SearchBars onsearch={onsearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {pictures.length > 0 && <ImageGal pictures={pictures} />}
      {pictures.length > 0 && !loading && endlist && <LoadMoreBtn loadmaor={handelloadmore} />}
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};
