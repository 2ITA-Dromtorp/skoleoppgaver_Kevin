import React, { useState } from 'react';
import Elev from './Elev';

export default function Klassekart() {
    const initialNames = [
        "Martin",
        "Mathias",
        "Kevin",
        "Andreas",
        "Falk",
        "Sander",
        "Ylva",
        "Vanessa",
        "Chen",
        "Fridtjof",
        "Luz",
    ];

    const [names, setNames] = useState(initialNames);

    const shuffleNames = () => {
        const shuffledNames = [...names];
        for (let i = shuffledNames.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]];
        }
        setNames(shuffledNames);
    };

    return (
        <div className='container'>
            <div className='learer'>
                <Elev name={names[0]} />
            </div>
            <div className='forste_rad'>
                {names.slice(1, 5).map((name, index) => (
                    <Elev key={index} name={name} />
                ))}
            </div>
            <div className='andre_rad'>
                {names.slice(5, 10).map((name, index) => (
                    <Elev key={index} name={name} />
                ))}
            </div>
            <div className='tredje_rad'>
                {names.slice(10).map((name, index) => (
                    <Elev key={index} name={name} />
                ))}
            </div>
            <button onClick={shuffleNames}>Randomize</button>
        </div>
    );
}
