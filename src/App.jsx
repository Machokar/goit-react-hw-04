import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
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
  const [showLoadMore, setShowLoadMore] = useState(false);
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
        console.log(total_pages);
        setPictures(prevPictures => [...prevPictures, ...results]);
        setShowLoadMore(total_pages !== page);
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
      {pictures.length > 0 && !loading && <LoadMoreBtn loadmaor={handelloadmore} />}
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};
