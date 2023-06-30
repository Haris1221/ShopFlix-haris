import React, {useState, useEffect} from 'react'
import {getMovies} from '../../utilities/movies-api'
import './Search.css'
export default function Search() {
    const [movies, setMovies]= useState([])
    useEffect(()=>{
        async function getMo(){
            const movis = await getMovies()
            setMovies(movis.c)
            
            // console.log(movis)
            // setMovi(movis.a[rands])
            // setD(movis.a[rands].overview.slice(0,150))
        }
        getMo()
    },[])
    console.log(movies)
  return (
    <div>
        <h1>Search</h1>
        
        <div className='SearchWrapper'>
            <input type='text' className='searchInput' onChange='' placeholder='Search movies'/>
            <div className='imageDiv'>
            {movies.map((elem,i)=>{
                return <div key={i} className='movie1' style={{backgroundImage:`url("https://www.themoviedb.org/t/p/original${elem.backdrop_path}")`}}>


                </div>
            })
            }</div>
            </div>
    </div>
  )
}