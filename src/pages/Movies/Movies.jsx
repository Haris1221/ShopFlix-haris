import {useEffect,useState} from 'react'
import './Movies.css'
import { getMovies } from '../../utilities/movies-api';
export default function Movies() {
    const [rands,setRand]=useState(Math.floor(Math.random()*20))
  const [description,setD]=useState('')
  const [movi,setMovi]=useState('')
    const [movies, setMovies]= useState([])
    useEffect(()=>{
        async function getMo(){
            const movies = await getMovies()
            setMovies(movies)
            setMovi(movies.a[rands])
            setD(movies.a[rands].overview.slice(0,150))
        }
        getMo()

    },[])
  return (
    <div className="App">
      <div className='movieBanner' style={{backgroundImage: `url("https://www.themoviedb.org/t/p/original${movi.backdrop_path}")`}}>
              <div className='bannertext'>
                <h1>{movi.title}</h1>
                <div className='btnDiv'>
                  <button>PLAY</button>
                  <button>MY LIST</button>
              </div>
                <p>{description}...</p>
              </div>
              <div className='gradient'/>
             </div>
             
      <div className="first">
        {movies.a.map((movie, i) => {
          return (
            <div
              key={i}
              className="movie"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.poster_path}")`
              }}
            />
          );
        })}
      </div>
      <h2>Top Rated</h2>
      <div className="second">
        {movies.b.map((movie, i) => {
          return (
            <div
              key={i}
              className="movie1"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`
              }}
            />
          );
        })}
      </div>
      <h2>Now Playing</h2>
      <div className="third">
        {movies.c.map((movie, i) => {
          return (
            <div
              key={i}
              className="movie1"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`
              }}
            />
          );
        })}
      </div>
      <h2>Sci-fi Movies</h2>
      <div className="third">
        {movies.d.map((movie, i) => {
          return (
            <div
              key={i}
              className="movie1"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`
              }}
            />
          );
        })}
      </div>
      <h2>Action Movies</h2>
      <div className="third">
        {movies.e.map((movie, i) => {
          return (
            <div
              key={i}
              className="movie1"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`
              }}
            />
          );
        })}
      </div>
      <h2>Comedy Movies</h2>
      <div className="third">
        {movies.f.map((movie, i) => {
          return (
            <div
              key={i}
              className="movie1"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`
              }}
            />
          );
        })}
      </div>
      <h2>Horror Movies</h2>
      <div className="third">
        {movies.g.map((movie, i) => {
          return (
            <div
              key={i}
              className="movie1"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`
              }}
            />
          );
        })}
      </div>
    </div>
  )
}
