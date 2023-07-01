import React, {useEffect, useState} from 'react'
import {getList} from '../../utilities/list-api'

export default function MyList() {
    const [list,setList]=useState([])
    useEffect(()=>{
        (async()=>{
            const movi = await getList()
            console.log(movi)
            console.log(movi)
            setList(movi)
        })()
        console.log(list)
        
    },[])
    return (
        <div>
            <h1>My List</h1>
            <div className='UpcomingWrapper'>
                
                
                {list.map((elem,i)=>{
                    return <div key={i} className='movie1' style={{backgroundImage: `url("https://www.themoviedb.org/t/p/original${elem.items.backdrop_path}")`}}>
    
    {elem.items.name}
                    </div>
                })
                }</div>
        </div>
      )
}
