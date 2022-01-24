import React, { Component } from 'react';
import sound from '../Audio/a.mp3'

function EasterEgg() {

    let audio = new Audio(sound)

    let button1_clicked = false;

    const start = () => {

        audio.volume = .05;
        audio.play();
        button1_clicked = true

    }

    if (button1_clicked) {

        alert('gjerklgjel');

    }

    return (
        
        <div>

            <button onClick={start}>Play</button>

        </div>

    );

}

export default EasterEgg;