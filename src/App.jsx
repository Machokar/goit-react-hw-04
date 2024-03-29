import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { SearchBars } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loaderbox/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { fetchArticle } from './api';
import { ImageModal } from './Imagem/ImageModal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [endlist, setEndlist] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  const handleOpen = url => {
    setModalUrl(url);
  };

  const handleClose = () => {
    setModalUrl('');
  };

  const searchPhoto = async query => {
    setQuery(query);
    setPictures([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
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
      <SearchBars searchPhoto={searchPhoto} />
      {loading && <Loader />}
      {error && <ErrorMessage errorText={`Something went wrong... ${error}. Please try again.`} />}
      {pictures.length > 0 && <ImageGallery images={pictures} handleClick={handleOpen} />}
      {pictures.length > 0 && !loading && endlist && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <Toaster position="bottom-center" reverseOrder={false} />
      {modalUrl && <ImageModal url={modalUrl} onClose={handleClose} />}
    </>
  );
};
