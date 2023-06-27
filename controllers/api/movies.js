async function indexMovie(req, res) {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk'
  }
};

fetch(url, options)
  .then(rizz => rizz.json())
  .then(john => {console.log(john.results);res.json(john.results)})
  .catch(err => console.error('error:' + err));
}

module.exports = {
  indexMovie,
};
