import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import { SearchBars } from "./SearchBar/SearchBar";
import axios from "axios";
import { ImageGal } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loaderbox/Loader";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onsearch = async (query) => {
    setQuery(`${Date.now()}/${query}`);
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
        const API_KEY = "W1wsHxYsAFpFUarV4Rp8LcaYATa0hkHXs-xzzxBWLVA";
        const respons = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              client_id: API_KEY,
              query: query.split("/")[1],
              page,
            },
          }
        );
        setPictures((prevPictures) => [
          ...prevPictures,
          ...respons.data.results,
        ]);
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
      {pictures.length > 0 && !loading && (
        <LoadMoreBtn loadmaor={handelloadmore} />
      )}
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};
