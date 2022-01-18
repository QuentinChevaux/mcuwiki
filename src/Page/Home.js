import React from "react";
import Header from "../Component/Header";
import ChangeMovieViewClass from "../Component/ChangeMovieViewClass";
 
function Home() {

    return (

        <div>

            <Header />

            <header>
            
                <h2 className="header_description">Bienvenu sur MCUwiki le Site qui recense tous les Films / Series de Marvel, vous pourrez y retrouver la liste complete ordonnée <br />
                    de tous les Films Marvel, la liste de tous les Personnages et bien plus encore !</h2>
                
            </header>

            <section>

                {/* <ChangeMovieView /> */}

                <ChangeMovieViewClass />

                <div className="movie_wrapper relative">

                    <div ref={this.ref} className="movie_box absolute" id="1">

                        <h2>Movie n°1</h2>
                        
                        <p>This is the First movie</p>

                    </div>

                    <div className="movie_box absolute" id="2">

                        <h2>Movie n°2</h2>
                        
                        <p>This is the Second movie</p>

                    </div>

                    <div className="movie_box absolute" id="3">

                        <h2>Movie n°3</h2>
                        
                        <p>This is the Third movie</p>

                    </div>

                </div>

            </section>

        </div>

    )

}

export default Home;