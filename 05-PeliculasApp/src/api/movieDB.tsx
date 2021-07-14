import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'bc68562e40f7773f78eaccc6010e5a8d',
    language: 'es-ES',
  },
});

export default movieDB;
