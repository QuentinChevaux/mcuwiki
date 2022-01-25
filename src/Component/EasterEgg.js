import React from 'react';
import sound from '../Audio/theendisnear.mp3'
import PowerStone from '../Images/power_stone.png';
import SpaceStone from '../Images/space_stone.png';
import RealityStone from '../Images/reality_stone.png';
import SoulStone from '../Images/soul_stone.png';
import TimeStone from '../Images/time_stone.png';
import MindStone from '../Images/mind_stone.png';

/* 
            
                Stone Order :

                - Power Stone
                - Space Stone
                - Reality Stone
                - Soul Stone
                - Time Stone
                - Mind Stone

*/

function EasterEgg() {

    let audio = new Audio(sound)

    let play_audio = () => {

        audio.volume = .1;
        audio.play();

    }

    let powerstoneclicked = () => {

        play_audio();

    }

    let spacestoneclicked = () => {

        play_audio();

    }

    let realitystoneclicked = () => {

        play_audio();

    }

    let soulstoneclicked = () => {

        play_audio();

    }

    let timestoneclicked = () => {

        play_audio();

    }

    let mindstoneclicked = () => {

        play_audio();

    }

    return (
        
        <div>

            <img src={PowerStone} onClick={powerstoneclicked} className='absolute stones' id='powerstone'/>

            <img src={SpaceStone} onClick={spacestoneclicked} className='absolute stones' id='spacestone'/>

            <img src={RealityStone} onClick={realitystoneclicked} className='absolute stones' id='realitystone'/>

            <img src={SoulStone} onClick={soulstoneclicked} className='absolute stones' id='soulstone'/>

            <img src={TimeStone} onClick={timestoneclicked} className='absolute stones' id='timestone'/>

            <img src={MindStone} onClick={mindstoneclicked} className='absolute stones' id='mindstone'/>

        </div>

    );

}

export default EasterEgg;