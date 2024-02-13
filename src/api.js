import axios from 'axios';
export const fetchArticle = async (query, page) => {
  const API_KEY = 'W1wsHxYsAFpFUarV4Rp8LcaYATa0hkHXs-xzzxBWLVA';
  const { respons } = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: API_KEY,
      query: query,
      page: page,
    },
  });
  return respons.data;
};