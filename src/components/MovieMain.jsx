import React, { useState } from 'react'
import MovieCard from './MovieCard'

function MovieMain({ data ,idTashuvchi, genre, pageTashuvchi}) {
    let [counter, setCounter] = useState(1)

    function nextPage() {
        setCounter(counter + 1)
        pageTashuvchi(counter + 1)
        
    }
    function prevPage() {
        setCounter(counter-1)
        pageTashuvchi(counter + 1)
    }


    return (
        
        <div>
            <div className="movie-main">
                <div className="container">
                    <div className="movie-main-inner">
                        {data && data.results.map((movieData, i) => {
                            return <MovieCard genre={genre} movieData={movieData} key={i} idTashuvchi={idTashuvchi}/>
                        })}
                    </div>
                    <div className="pagination">
                       <button onClick={prevPage}>prev</button>
                       <span>{counter}</span>
                       <button onClick={nextPage}>next</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default MovieMain

