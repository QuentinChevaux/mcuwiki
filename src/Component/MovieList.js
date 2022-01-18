import React, { Component} from "react";
import MovieData from "../Data/Movie.json";
import MovieDetail from "./MovieDetail";

class MovieList extends Component {

    constructor(props) {

        super(props)

        this.state = {MovieList: []}

        this.SortChronologicaly = this.SortChronologicaly.bind(this)

        this.SortDate = this.SortDate.bind(this)

    }
    
    SortChronologicaly() {

        const {MovieList} = this.state

        // LE SORT NE FONCTIONNE PAS JE NE COMPREND PAS POURQUOI :|
        
        this.setState({MovieList: MovieList.sort((a,b) => a.id < b.id)})

        console.log(MovieList);

    }
    
    SortDate() {
        
        this.setState({MovieList: this.state.MovieList.reverse()})

        
    }
    
    componentDidMount() {

        this.setState({MovieList: MovieData})

    }

    render () {

        const {MovieList} = this.state;
        
        return (

            <div>

                <div>

                    <button onClick={this.SortChronologicaly}>Sort Chronologique</button>

                    <button onClick={this.SortDate}>Reverse</button>

                </div>

                <div className="flex_center">

                    {MovieList.map((item, index) => {

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