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
        <div className="first">
        {movies.length > 0 ? (
          movies.map((movie, i) => (
            <div key={i}>{movie.original_title}</div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      

    );

}
