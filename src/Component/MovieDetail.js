import React, { Component} from "react";

class MovieDetail extends Component {

    render () {
        
        let {movie} = this.props;

        return (

            <div className="movie_list_div">

                        
                <h2>{movie.title}</h2>

                <p>{movie.description}</p>

                <p>{movie.date}</p>


            </div>

        )

    }

}

export default MovieDetail;