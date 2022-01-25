import React from "react";
import Header from "../Component/Header";
import MovieList from "../Component/MovieList";
import EasterEgg from "../Component/EasterEgg";
import SizeCheck from "../Component/SizeCheck";

function Home() {

    const isDesktop = SizeCheck();

    return (

        <div>

            <Header />

            <header>
            
                <h2 className="header_description">Bienvenu sur MCUwiki le Site qui recense tous les Films / Series de Marvel, vous pourrez y retrouver la liste complete ordonnée <br />
                    de tous les Films Marvel, la liste de tous les Personnages et bien plus encore !</h2>
                
            </header>

            <section>

                <div className="movie_wrapper">

                    <div className="watcher">

                        <MovieList />

                    </div>

                </div>

            </section>

            <div>

                { isDesktop ? <EasterEgg /> : null }

            </div>

            

        </div>

    )

}

export default Home;