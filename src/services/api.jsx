import axios from 'axios';
// const APIKEY = 'c760d37bfefdf9557e41d0ec8ce490b4';

const TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzYwZDM3YmZlZmRmOTU1N2U0MWQwZWM4Y2U0OTBiNCIsInN1YiI6IjY1OWVjYzY3YjM5ZTM1MDBmMDhkZTFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vT1sqyNIrRG5OaQlrShISeSAfD5-uhac2i7B0cWxseg';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: TOKEN,
  },
};

export async function fetchMoviesTrending() {
  try {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      options
    );

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMoviesSearching(name) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${name}&language=en-US&include_adult=false`,
      options
    );

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetailsById(id) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieCreditsById(id) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieReviewsById(id) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
