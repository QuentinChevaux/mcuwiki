import React from "react";
import Header from "../Component/Header";
import ChangeMovieView from "../Component/ChangeMovieView";
 
function Home() {

    return (

        <div>

            <Header />

            <header>
            
                <h2 className="header_description">Bienvenu sur MCUwiki le Site qui recense tous les Films / Series de Marvel, vous pourrez y retrouver la liste complete ordonnée <br />
                    de tous les Films Marvel, la liste de tous les Personnages et bien plus encore !</h2>
                
            </header>

            <section>

                <ChangeMovieView />

            </section>

        </div>

    )

}

export default Home;