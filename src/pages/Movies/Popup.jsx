import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addList } from '../../utilities/list-api'
export default function PopUp({popUp}) {
const [listState,setList] = useState ({})

function handleClick(e){
    e.preventDefault()
    async function getMo(){
            const movis = await addList({
                name: popUp.title,
                release_date:popUp.release_date,
                genre: popUp.genre_ids,
                rating: popUp.vote_average,
                description: popUp.overview,
                poster_path: popUp.poster_path,
                backdrop_path: popUp.backdrop_path,
                original_language: popUp.original_language,
                popularity:popUp.popularity
            })
            console.log(movis)
       
     }
        getMo()
        
   
    
}


  return(
    <div className='popup' style={{backgroundImage:`url("https://www.themoviedb.org/t/p/original${popUp.backdrop_path}")`}}> 
     
      <div>
      <div className='movieTitle'>
      <h2 className='popTitle'> 
      {popUp.title} 
      </h2>
      
      
      <p className='originalLanguage'>Original Language: {popUp.original_language} &nbsp; &nbsp; {popUp.popularity} &nbsp; &nbsp; Rating: {popUp.vote_average}
      </p>
      <p className='overview'>{popUp.overview}</p>
      <div className='btnDiv'>
          <button onClick={handleClick}>ADD LIST</button>
          <Link to='/list'><button>MY LIST</button></Link></div>
      </div>
      
      </div>

      <span className='exitPopup' onClick={()=>{
      document.querySelector('.popup').style.display = 'none'
      }}> 
      X
      </span> 
    </div>
  )
}
