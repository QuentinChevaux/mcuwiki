import React, { Component } from 'react';

class ChangeMovieView extends Component {

    constructor(props) {

        super(props)

        this.state = {top: '0', left: '0', view: '0'}

        this.ChangeToChronological = this.ChangeToChronological.bind(this)

        this.ChangeToDate = this.ChangeToDate.bind(this)

        this.ref = React.createRef()

    }

    componentDidMount() {

        const styles = getComputedStyle(this.ref.current)

        console.log(styles.top)     // Affiche bien les Valeurs top et left de la Div
        console.log(styles.left)

    }

    ChangeToChronological() {
        
        this.state.view = 0;

        let ChronologicalX = [10, 20, 200];
    
        let ChronologicalY = [10, 500, 1000];

        let length_array = ChronologicalX.length;

        if (this.state.view == 0) {

            console.log('La vue est en Vue Chronologique');

            for( let i = 0; i < length_array; i++) {

                this.setState({left: ChronologicalX[i]});

                this.setState({top: ChronologicalY[i]})

                console.log('Valeur Div n°' + [i], ': X = ' + ChronologicalX[i], 'Y = ' + ChronologicalY[i]);

                // document.getElementById([i]).style.left = this.state.left;

                // document.getElementById([i]).style.top = this.state.top;

            }

        }
  
    }
    
    ChangeToDate() {

        this.state.view = 1;

        let DateX = [50, 400, 800];

        let DateY = [60, 200, 600];

        let length_array = DateX.length

        if (this.state.view == 1) {

            console.log('La vue est en Vue par Date de Sortie');

            for( let i = 0; i < length_array; i++) {

                this.setState({left: DateX[i]});

                this.setState({top: DateY[i]});

                console.log('Valeur Div n°' + [i], ': X = ' + DateX[i], 'Y = ' + DateY[i]);

                // document.getElementById([i]).style.left = this.state.left;

                // document.getElementById([i]).style.top = this.state.top;

            }

        }

    }

    render() {

        return (


            <div>

                <div className="flex_center view_sort_div">

                    <div>

                        <button onClick={this.ChangeToChronological}>Vue Chronologique</button>

                    </div>

                    <div>

                        <button onClick={this.ChangeToDate}>Vue par Date de Sortie</button>

                    </div>

                </div>

                <div className="movie_wrapper relative">

                    <div ref={this.ref} className="movie_box absolute" id="1">

                        <h2>Movie n°1</h2>
                        
                        <p>This is the First movie</p>

                    </div>

                    <div className="movie_box absolute" id="2">

                        <h2>Movie n°2</h2>
                        
                        <p>This is the Second movie</p>

                    </div>

                    <div  className="movie_box absolute" id="3">

                        <h2>Movie n°3</h2>
                        
                        <p>This is the Third movie</p>

                    </div>

                </div>


            </div>


            

        )

    }

}

export default ChangeMovieView;
