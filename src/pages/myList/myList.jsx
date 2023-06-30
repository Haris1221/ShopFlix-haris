import React from 'react'

export default function MyList({cart}) {
    return (
        <div>
            <div>
                {cart.lineItem.map((movie, i) => (
                    <p className='myList' key={i} style={{backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`}}>
                        {movie} 
                    </p>
                ))}
            </div>
        </div>
    )
}
