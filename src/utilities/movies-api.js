import sendRequest from "./send-request";
const BASE_URL = '/api/movies';

export async function getMovies() {
  return sendRequest(BASE_URL)
}
export async function getSearchResult(movie) {
  return sendRequest(BASE_URL+'/'+movie)
}

// export async function getMovies(page) {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=YOUR_API_KEY`
//   );
//   const data = await response.json();
//   return data.results;
// }