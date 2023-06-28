import {useEffect,useState} from 'react'
import './Movies.css'
import { getMovies } from '../../utilities/movies-api';

function PopUp({popUp}) {
  return(
    <div className='popup'> 
      <img alt=''/>
      <div className='movieTitle'>
      <h2> 
      {popUp.title} 
      </h2>
      <span onClick={()=>{
      document.querySelector('.popup').style.display = 'none'
      }}> 
      X
      </span>
      </div>
      <p className='originalLanguage'>Original Language: {popUp.original_language} &nbsp; &nbsp; {popUp.popularity} &nbsp; &nbsp; Rating: {popUp.vote_average}
      </p>
      <p className='overview'>{popUp.overview}</p>
      <div className='btnDiv'>
          <button>PLAY</button>
          <button>MY LIST</button>
      </div>
    </div>
  )
}

export default function Movies() {
  const [rands,setRand]=useState(Math.floor(Math.random()*20))
  const [description,setD]=useState('')
  const [movi,setMovi]=useState('')
  const [movies, setMovies]= useState({})
  const [popUp, setPopUp] = useState({})
    useEffect(()=>{
        async function getMo(){
            const movis = await getMovies()
            setMovies({...movies, a:movis.a, b:movis.b, c:movis.c, d:movis.d, e:movis.e, f:movis.e, g:movis.g})
            console.log(movis)
            console.log(movies)
            setMovi(movis.a[rands])
            setD(movis.a[rands].overview.slice(0,150))
        }
        getMo()

    },[])
  return (
    <div className="App">
      <PopUp popUp = {popUp} />
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
              <h2 className='h2'>Trending</h2> 
              <div className="firstScroll"> 
      <div className="first">
        {movies.a?movies.a.map((movie, i) => {
          return (
            <div
              key={i}
              onClick={()=> {
                setPopUp({...movie})
                document.querySelector('.popup').style.display = 'flex'
                console.log('this is popUp',popUp)
              }}
              className="movie"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.poster_path}")`
              }}
            />
          );
        }):<></>}
      </div>
      </div>
     <h2 className='h2'>Top Rated</h2>
     <div className="secondScroll"> 
      <div className="second">
        {movies.b?movies.b.map((movie, i) => {
          return (
            <div
              key={i} 
              onClick={()=> {
                setPopUp({...movie})
                document.querySelector('.popup').style.display = 'flex'
                console.log('this is popUp',popUp)
              }}
              className="movie1"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`
              }}
            />
          );
        }):<></>}
      </div>
      </div>
      <h2 className='h2'>Now Playing</h2>
      <div className="secondScroll"> 
      <div className="second">
        {movies.c?movies.c.map((movie, i) => {
          return (
            <div
              key={i}
              onClick={()=> {
                setPopUp({...movie})
                document.querySelector('.popup').style.display = 'flex'
                console.log('this is popUp',popUp)
              }}
              className="movie1"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`
              }}
            />
          );
        }):<></>}
      </div>
      </div>
        <h2 className='h2'>Sci-fi Movies</h2>
        <div className="secondScroll"> 
      <div className="second">
        {movies.d?movies.d.map((movie, i) => {
          return (
            <div
              key={i}
              onClick={()=> {
                setPopUp({...movie})
                document.querySelector('.popup').style.display = 'flex'

                console.log('this is popUp',popUp)
              }}
              className="movie1"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`
              }}
            />
          );
        }):<></>}
      </div>
      </div>
      <h2 className='h2'>Action Movies</h2>
      <div className="secondScroll"> 
      <div className="second">
        {movies.e?movies.e.map((movie, i) => {
          return (
            <div
              key={i}
              onClick={()=> {
                setPopUp({...movie})
                document.querySelector('.popup').style.display = 'flex'

                console.log('this is popUp',popUp)
              }}
              className="movie1"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`
              }}
            />
          );
        }):<></>}
      </div>
      </div>
      <h2 className='h2'>Comedy Movies</h2>
      <div className="secondScroll"> 
      <div className="second">
        {movies.f?movies.f.map((movie, i) => {
          return (
            <div
              key={i}
              onClick={()=> {
                setPopUp({...movie})
                document.querySelector('.popup').style.display = 'flex'

                console.log('this is popUp',popUp)
              }}
              className="movie1"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`
              }}
            />
          );
        }):<></>}
      </div>
      </div>
      <h2 className='h2'>Horror Movies</h2>
      <div className="secondScroll"> 
      <div className="second">
        {movies.g?movies.g.map((movie, i) => {
          return (
            <div
              key={i}
              onClick={()=> {
                setPopUp({...movie})
                document.querySelector('.popup').style.display = 'flex'

                console.log('this is popUp',popUp)
              }}
              className="movie1"
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`
              }}
            />
          );
        }):<></>}
      </div>
      </div> 
    </div>
  )
}
