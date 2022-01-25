import React from 'react';
import sound from '../Audio/a.mp3'
import SpaceStone from '../Images/space_stone.png';

function EasterEgg() {



    let audio = new Audio(sound)

    let play_audio = () => {

        audio.volume = .1;
        audio.play();

    }

    let spacestoneclicked = () => {

        play_audio();

    }

    return (
        
        <div>

            <img src={SpaceStone} onClick={spacestoneclicked} className='absolute' id='spacestone'/>

        </div>

    );

}

export default EasterEgg;