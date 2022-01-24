import React from 'react';
import sound from '../Audio/a.mp3'
import SpaceStone from '../Images/space_stone.png';

function EasterEgg() {

    let audio = new Audio(sound)

    let start_audio = () => {

        audio.volume = .05;
        audio.play();

    }

    let spacestoneclicked = () => {

        alert('Space Stone Clicked');
        start_audio();

    }

    return (
        
        <div>

            <img src={SpaceStone} onClick={spacestoneclicked} className='stone absolute' id='spacestone'/>

        </div>

    );

}

export default EasterEgg;