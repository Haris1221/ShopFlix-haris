async function indexMovie(req, res) {
const data={
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: []
  }
        const url1 =
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk"
          }
        };
        const url2 =
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc";
        const url3 =
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc";
        const url4 =
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc";
        const url5 =
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc&with_genres=action";
        const url6 =
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=6&sort_by=popularity.desc&with_genres=comedy";
        const url7 =
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=7&sort_by=popularity.desc&with_genres=horror";
  
        fetch(url1, options)
          .then((rizz) => rizz.json())
          .then((john) => {
            data.a=[...john.results ];
          })
          .catch((err) => console.error("error:" + err));
  
        fetch(url2, options)
          .then((rizz) => rizz.json())
          .then((john) => {
            data.b=[...john.results];
          })
          .catch((err) => console.error("error:" + err));
  
        fetch(url3, options)
          .then((rizz) => rizz.json())
          .then((john) => {
            data.c=[ john.results] ;
          })
          .catch((err) => console.error("error:" + err));
  
        fetch(url4, options)
          .then((rizz) => rizz.json())
          .then((john) => {
            data.d= john.results
          })
          .catch((err) => console.error("error:" + err));
        fetch(url5, options)
          .then((rizz) => rizz.json())
          .then((john) => {
            data.e= john.results 
          })
          .catch((err) => console.error("error:" + err));
        fetch(url6, options)
          .then((rizz) => rizz.json())
          .then((john) => {
            data.f= john.results 
          })
          .catch((err) => console.error("error:" + err));
        fetch(url7, options)
          .then((rizz) => rizz.json())
          .then((john) => {
            data.g= john.results 
          })
          .catch((err) => console.error("error:" + err));
          console.log(data)
        res.json(data)
}

module.exports = {
  indexMovie,
};
