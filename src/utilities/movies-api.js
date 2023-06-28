import sendRequest from "./send-request";
const BASE_URL = 'https://shopflix-api.onrender.com/api/movies';

export async function getMovies() {
  return sendRequest(BASE_URL)
}
