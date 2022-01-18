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

        // LE SORT NE FONCTIONNE PAS JE NE COMPREND PAS POURQUOI :|
        
        this.setState({movieList: this.state.movieList.sort((a,b) => a.id > b.id)})


    }
    
    SortDate() {
        
        this.setState({movieList: this.state.movieList.reverse()})

        
    }
    
    componentDidMount() {

        this.setState({movieList: MovieData})

    }

    render () {

        const {movieList} = this.state;
        
        return (

            <div>

                <div>

                    <button onClick={this.SortChronologicaly}>Sort Chronologique</button>

                    <button onClick={this.SortDate}>Reverse</button>

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