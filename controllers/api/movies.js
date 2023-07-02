function indexMovie(req, res) {
  const data = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
  };
  const url1 =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk',
    },
  };
  const url2 =
  'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'  
  const url3 =
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
  const url4 =
  'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
  const url5 =
  'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27%2C80'
  const url6 =
  'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28%2C12';
  const url7 =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&certification_country=US&certification.lte=PG&with_genres=PG%2c16%2C10751%2C14&include_adult=false&sort_by=popularity.desc';

    
    
  fetch(url1, options)
    .then((rizz) => rizz.json())
    .then((john) => {
      data.a = [...john.results];
    })
    fetch(url2, options)
    .then((rizz) => rizz.json())
    .then((john) => {
      data.b = [...john.results];
    })
    fetch(url3, options)
    .then((rizz) => rizz.json())
    .then((john) => {
      data.c = [...john.results];
    })
    fetch(url4, options)
    .then((rizz) => rizz.json())
    .then((john) => {
      data.d = [...john.results];
    })
    fetch(url5, options)
    .then((rizz) => rizz.json())
    .then((john) => {
      data.e = [...john.results];
    })
    fetch(url6, options)
    .then((rizz) => rizz.json())
    .then((john) => {
      data.f = [...john.results];
    })
    fetch(url7, options)
    .then((rizz) => rizz.json())
    .then((john) => {
      data.g = [...john.results];
      res.json(data)

    })
    
    .catch((err) => console.error('error:' + err));
}

function searchApi(req, res){
  const url = `https://api.themoviedb.org/3/search/movie?query=${req.params.movie}&include_adult=false&language=en-US&page=1`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk',
    },
  };
  fetch(url, options)
  .then((rizz)=>rizz.json())
  .then((searchApi)=>{

    res.status(200).json(searchApi)

  })
  .catch(error=>console.log(error))
}

module.exports = {
  indexMovie,
  searchApi
};
