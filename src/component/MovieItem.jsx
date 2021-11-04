import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import "../styles/home.css"
const MovieItem = ({movie,props, user}) => {

    const onClick = e=>{
        e.preventDefault()
        if(user?.user?.isConfirmed === false){
            return alert("plese verify your email") & props.history.push(`/myProfile`)
        }else{
            if(movie._id){
                props.history.push(`/movieDetails/${movie._id}`)
            }else {props.history.push(`/movieDetails/${movie.movieid}`)}

        }
    }
    return (
        <div className="card">
            {/* <Link to={`/movieDetails/${movie._id}`} > */}
            <img src={movie.posterImage} onClick={onClick} alt="poster" />
            {/* </Link> */}
        </div>
    )
}
const mapstaStore = e=>{
    return{
        user:e.userState.user
    }
}
export default connect(mapstaStore)(MovieItem)
