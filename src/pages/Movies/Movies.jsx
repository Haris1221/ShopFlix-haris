import {useEffect,useState} from 'react'
import './Movies.css'
import { getMovies } from '../../utilities/movies-api';
export default function Movies() {
    const [movies, setMovies]= useState([])
    useEffect(()=>{
        async function getMo(){
            const movies = await getMovies()
            setMovies(movies)
        }
        getMo()

    },[])
  return (
    <div className='first'>
      <div className='second'>
        {movies.map((movie,i)=>{
            return <div key={i} className='movie' style={{backgroundImage:`url("https://www.themoviedb.org/t/p/original${movie.poster_path}")`}}/>
        })}
        </div>
    </div>
  )
}
