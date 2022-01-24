import React, { Component} from "react";
import MovieData from "../Data/Movie.json";
import MovieDetail from "./MovieDetail";

class MovieList extends Component {

    constructor(props) {

        super(props)

        this.state = {movieList: []}

        this.SortChronologicaly = this.SortChronologicaly.bind(this)

        this.SortDate = this.SortDate.bind(this)

    }
    
    SortChronologicaly() {
        
        this.setState({movieList: [...this.state.movieList].sort((a, b) => {

            if (a.id_chronological < b.id_chronological) {
                return -1;
            }
            if (a.id_chronological > b.id_chronological) {
                return 1;
            }
                return 0;
            })

        });

    }
    
    SortDate() {
        
        this.setState({movieList: [...this.state.movieList].sort((a, b) => {

            if (a.id_date < b.id_date) {
                return -1;
            }
            if (a.id_date > b.id_date) {
                return 1;
            }
                return 0;
            })

        });

        
    }
    
    componentDidMount() {

        this.setState({movieList: MovieData})

    }

    render () {

        const {movieList} = this.state;
        
        return (

            <div>

                <div className="sort_button_div">

                    <button onClick={this.SortChronologicaly}>Sort Chronologique</button>

                    <button onClick={this.SortDate}>Sort par date</button>

                </div>

                <div className="flex_center">

                    {movieList.map((item, index) => {

                        return <MovieDetail 
                                    movie = {item}
                                    key = {`movie-list-key ${index}`}
                                />  

                    })}

                </div>

            </div>


        )

    }

}

export default MovieList;