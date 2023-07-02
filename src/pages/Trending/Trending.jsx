import React, {useState, useEffect} from 'react'
import {getMovies} from '../../utilities/movies-api'
import './Trending.css'
export default function Trending() {
    const [movies, setMovies]= useState([])
    const [d,setD]=useState(0)
    useEffect(()=>{
        async function getMo(){
            const movis = await getMovies()
            setMovies(movis.a)
            setD(1)
            // console.log(movis)
            // setMovi(movis.a[rands])
            // setD(movis.a[rands].overview.slice(0,150))
        }
        getMo()
    },[])
    console.log(movies)
    useEffect(()=>{
            if(movies.length<1 && d===1){
            window.location.reload()
        }
    },[movies])
    
  return (
    <div>
        <h1>Trending</h1>
        <div className='trendingWrapper'>
            
            
            {movies.map((elem,i)=>{
                return <div key={i} className='movie1' style={{backgroundImage:`url("https://www.themoviedb.org/t/p/original${elem.backdrop_path}")`}}>


                </div>
            })
            }</div>
    </div>
  )
}