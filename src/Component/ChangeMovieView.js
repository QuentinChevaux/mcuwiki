import React, { useState, useEffect } from "react";

function ChangeMovieView() {

    let [view, setView] = useState(0)  // 0 = Chronological View, 1 = Date View

    let originalvalueX = [10, 20, 200];
    
    let originalvalueY = [10, 500, 1000];

    useEffect( () => {

        if(view == 0) {

            console.log('La vue est en Vue Chronologique');

            for( let i = 0; i < originalvalueX.length; i++) {

                console.log(originalvalueX[i]);

                // document.getElementById({i}).style.left = originalvalueX[i];

            }
            
        }
        
        if(view == 1) {
            
            console.log('La vue est en vue par Date de Sortie')

            

        }

    }, [view]);

    return (

        <div className="flex_center view_sort_div">

                <div>

                    <button onClick={ () => setView(0)}>Vue Chronologique</button>

                </div>

                <div>

                    <button onClick={ () => setView(1)}>Vue par Date de Sortie</button>

                </div>

        </div>

    )

}

export default ChangeMovieView;