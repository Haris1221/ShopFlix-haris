import React, {useState, useEffect} from 'react'
import {getMovies} from '../../utilities/movies-api'
import './Upcoming.css'
export default function Upcoming() {
    const [movies, setMovies]= useState([])
    useEffect(()=>{
        async function getMo(){
            const movis = await getMovies()
            setMovies(movis.b)
            
            // console.log(movis)
            // setMovi(movis.a[rands])
            // setD(movis.a[rands].overview.slice(0,150))
        }
        getMo()
    },[])
    console.log(movies)
  return (
    <div>
        <h1>Upcoming</h1>
        <div className='UpcomingWrapper'>
            
            
            {movies.map((elem,i)=>{
                return <div key={i} className='movie1' style={{backgroundImage:`url("https://www.themoviedb.org/t/p/original${elem.backdrop_path}")`}}>


                </div>
            })
            }</div>
    </div>
  )
}