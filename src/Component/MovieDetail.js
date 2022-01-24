import React, { Component } from "react";

class MovieDetail extends Component {

    render () {
        
        let {movie} = this.props;

        return (

            <div className="movie_list_div flex_center" style={{ backgroundImage : `url('${movie.background}')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

                <div className="movie_list_div_content">

                    <p className="movie_list_title"><strong>{movie.title}</strong></p>

                    <p className="movie_list_description">{movie.description}</p>

                    <p className="movie_list_date">{movie.date}</p>

                </div>

            </div>

        )

    }

}

export default MovieDetail;