import React from 'react'
import "../styles/movieDetails.css"
const MoviePlayer = ({movie}) => {



    
    return (
        <div className="movieDetails" >
                <iframe 
        src={`https://www.youtube.com/embed/${movie.videoId}`}
         title="video player" 
         frameBorder="0"
         className="iframe"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
          </iframe>
          <div className="moviehead" >
              <h1>{movie.name}</h1>
          </div>
          <div className="head2">
              <span>
                  {movie.genrec[0]}
              </span>
              <span>
                  {movie.genrec[1] ? movie.genrec[1] :""}
              </span>
              <span>
                  {movie.releaseDate}
              </span>
          </div>
          <div className="head3">
              <p style={{margin:"0px"}}>{movie.description}</p>

          </div>
        </div>
    )
}

export default MoviePlayer
