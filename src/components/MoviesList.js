import React from "react";
import { Link } from "react-router-dom";
const MoviesList= (props) =>{
    return(
        <>
        {props.movies.map((movies,index)=><div>
            {movies.Title}
            <img src={movies.Poster} alt="movie" width="100"></img>
            <Link to="/About" >click for more</Link>
        </div>
        )}
        </>
    )
}
export default MoviesList;