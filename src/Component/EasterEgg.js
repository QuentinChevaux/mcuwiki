import React from 'react';
import sound from '../Audio/a.mp3'
import SpaceStone from '../Images/space_stone.png';

function EasterEgg() {

    let audio = new Audio(sound)

    const start = () => {

        audio.volume = .05;
        audio.play();

    }

    return (
        
        <div>

            <img src={SpaceStone} onClick={start} className='stone absolute' id='spacestone'/>

        </div>

    );

}

export default EasterEgg;