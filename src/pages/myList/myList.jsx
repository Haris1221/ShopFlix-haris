import React, {useEffect, useState} from 'react'
import {getList} from '../../utilities/list-api'
import {motion} from 'framer-motion'
export default function MyList() {
    const [list,setList]=useState([])
    const [d,setD]=useState(0)
    useEffect(()=>{
       
        (async()=>{
            
            const movi = await getList()

            setList(movi)
        })()
        console.log(list)
        
        
    },[])
    return (
        <div
        >
            <h1>My List</h1>
            <div className='UpcomingWrapper'>
                
                
                {list.length<1?<>No movies added yet</>:list.map((elem,i)=>{
                    return < motion.div
                    transition={{delay:0.1*i}}
                    initial={{opacity:0,x:10,delay:0.1*i}}
                    animate={{opacity:1,x:0,delay:0.5*i}}
                    exit={{opacity:0,x:20,delay:0.1*i}}
                    key={i} className='movie1' style={{backgroundImage: `url("https://www.themoviedb.org/t/p/original${elem.items.backdrop_path}")`}}>
    
    {elem.items.name}
                    </motion.div>
                })
                }</div>
        </div>
      )
}
