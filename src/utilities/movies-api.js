import sendRequest from "./send-request";
const BASE_URL = '/api/movies';

export async function getMovies() {
  return sendRequest(BASE_URL)
}
export async function getSearchResult(movie) {
  return sendRequest(BASE_URL+'/'+movie)
}
