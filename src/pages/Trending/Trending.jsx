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

// import React, { useState, useEffect } from 'react';
// import { getMovies } from '../../utilities/movies-api';
// import './Trending.css';

// export default function Trending() {
//   const [movies, setMovies] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     async function fetchMovies() {
//       const moviesData = await getMovies(currentPage);
//       setMovies(moviesData);
//     }
//     fetchMovies();
//   }, [currentPage]);

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const moviesPerPage = 20;
//   const indexOfLastMovie = currentPage * moviesPerPage;
//   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//   const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

//   return (
//     <div>
//       <h1>Trending</h1>
//       <div className='trendingWrapper'>
//         {currentMovies.map((elem, i) => (
//           <div
//             key={i}
//             className='movie1'
//             style={{
//               backgroundImage: `url("https://www.themoviedb.org/t/p/original${elem.backdrop_path}")`,
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className='pagination'>
//         <button
//           className='paginationBtn'
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//         >
//           &lt; Previous
//         </button>
//         <span className='currentPage'>{currentPage}</span>
//         <button
//           className='paginationBtn'
//           onClick={handleNextPage}
//           disabled={indexOfLastMovie >= movies.length}
//         >
//           Next &gt;
//         </button>
//       </div>
//     </div>
//   );
// }
