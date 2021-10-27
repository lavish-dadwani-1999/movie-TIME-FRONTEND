import React from 'react'
import MovieItem from './MovieItem'
import "../styles/home.css"
const MovieList = ({movies, props}) => {
    return (
        <div className="container"> { movies.length > 0 ? movies.map(movie=>  <MovieItem key={movie._id} movie={movie} props={props} />) : <h1>movie not found</h1> } </div>
    )
}

export default MovieList
